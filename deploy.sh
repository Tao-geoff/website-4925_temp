#!/bin/bash

# 贸易制造业网站 - 腾讯云部署脚本
# 使用方法: ./deploy.sh [environment]
# environment可选值: dev, prod (默认为dev)

# 设置错误时立即退出
set -e

# 获取环境参数
ENV=${1:-dev}
echo "部署环境: $ENV"

# 配置变量
APP_NAME="valentijapan"
APP_DIR="/var/www/$APP_NAME"
BACKUP_DIR="$APP_DIR/backups"
TIMESTAMP=$(date +"%Y%m%d%H%M%S")

# 确保备份目录存在
mkdir -p $BACKUP_DIR

# 备份当前版本
echo "备份当前版本..."
if [ -d "$APP_DIR/my-app" ]; then
    tar -czf "$BACKUP_DIR/$APP_NAME-$TIMESTAMP.tar.gz" -C $APP_DIR/my-app .
    echo "备份完成: $BACKUP_DIR/$APP_NAME-$TIMESTAMP.tar.gz"
fi

# 更新代码
echo "更新代码..."
cd $APP_DIR
git pull origin main

# 安装依赖
echo "安装依赖..."
cd $APP_DIR/my-app
npm ci --production

# 构建项目
echo "构建项目..."
if [ "$ENV" == "prod" ]; then
    npm run build
else
    # 开发环境可能需要不同的构建命令或环境变量
    NODE_ENV=development npm run build
fi

# 重启应用
echo "重启应用..."
if pm2 list | grep -q "$APP_NAME"; then
    pm2 restart $APP_NAME
else
    pm2 start npm --name "$APP_NAME" -- start
fi

# 保存PM2配置
pm2 save

# 清理旧备份（保留最近10个）
echo "清理旧备份..."
ls -t $BACKUP_DIR/*.tar.gz | tail -n +11 | xargs -r rm

# Nginx配置检查
echo "检查Nginx配置..."
sudo nginx -t
if [ $? -eq 0 ]; then
    echo "Nginx配置正确，重新加载Nginx..."
    sudo systemctl reload nginx
else
    echo "Nginx配置有误，请检查配置文件"
    exit 1
fi

echo "部署完成！应用已经在 http://localhost:3000 运行"
echo "如果配置了域名，请访问您的域名查看网站"

# 执行健康检查
echo "执行健康检查..."
sleep 5
if curl -s http://localhost:3000 > /dev/null; then
    echo "健康检查通过 ✓"
else
    echo "警告: 健康检查失败，请检查应用日志"
    pm2 logs $APP_NAME --lines 20
fi 