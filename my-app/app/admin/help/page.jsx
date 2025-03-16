'use client';

import React from 'react';
import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">帮助指南</h1>
            <div className="space-x-4">
              <Link 
                href="/admin"
                className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors"
              >
                返回内容管理
              </Link>
              <Link 
                href="/"
                className="px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
              >
                返回网站
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 帮助内容 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            内容管理系统使用指南
          </h2>

          <div className="space-y-8">
            {/* 基本介绍 */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                基本介绍
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                贸易制造业  内容管理系统允许您更新网站的各个部分，而无需直接修改代码。系统主要包括两部分：
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>JSON数据编辑 - 用于修改网站文本和结构内容</li>
                <li>图片管理 - 用于上传和管理网站使用的图片</li>
              </ul>
            </section>

            {/* JSON数据编辑 */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                JSON数据编辑
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                JSON数据文件控制网站上显示的内容。每个文件对应网站的不同部分：
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>settings.json</strong> - 网站全局设置，如公司联系信息和社交媒体链接
                </li>
                <li>
                  <strong>home.json</strong> - 首页内容，包括英雄区域、特色、关于部分和客户评价
                </li>
                <li>
                  <strong>products.json</strong> - 产品数据，包括产品类别和详细产品信息
                </li>
                <li>
                  <strong>company.json</strong> - 公司信息，包括介绍、使命、愿景和团队成员
                </li>
                <li>
                  <strong>contact.json</strong> - 联系页面内容，包括联系表单和联系信息
                </li>
              </ul>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-700 dark:text-yellow-200">
                  <strong>注意：</strong> 编辑JSON文件时必须保持正确的格式，否则可能导致网站显示错误。
                </p>
              </div>

              {/* 添加contact.json使用指南 */}
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  contact.json 使用指南
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-2">
                  <li><strong>标题(title)和副标题(subtitle)：</strong>修改联系页面的主要标题和说明文字</li>
                  <li><strong>联系信息(contactInfo)：</strong>更新公司的地址、电话、邮箱和工作时间</li>
                  <li><strong>表单字段(form.fields)：</strong>可以修改表单字段的标签、占位符和验证提示</li>
                  <li><strong>地图URL(mapUrl)：</strong>修改Google地图嵌入链接，显示公司位置</li>
                </ul>
              </div>

              {/* 添加JSON编辑安全提示 */}
              <div className="mt-4 bg-pink-50 dark:bg-pink-900/20 p-4 rounded-md">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  JSON编辑安全提示
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-2">
                  <li>保持JSON格式的正确性，每个属性名和字符串值都需要双引号</li>
                  <li>确保每个逗号、括号位置正确，最后一个属性后不要加逗号</li>
                  <li>如需修改图片路径，请先使用图片管理功能上传图片</li>
                  <li>编辑前建议先复制一份当前内容作为备份</li>
                  <li>有疑问时可使用 <a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">JSONLint</a> 等在线工具验证格式</li>
                </ul>
              </div>
            </section>

            {/* 图片管理 */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                图片管理
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                图片管理功能允许您上传新图片并获取其URL路径，用于在JSON数据中引用：
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>选择适当的图片目录类别（产品图片、公司图片等）</li>
                <li>上传图片（支持JPG、PNG、GIF和WebP格式，最大5MB）</li>
                <li>复制生成的图片路径</li>
                <li>将图片路径粘贴到相应的JSON数据文件中</li>
              </ul>
            </section>

            {/* JSON格式指南 */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                JSON格式指南
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                JSON数据必须遵循特定格式才能正确显示。以下是一些基本规则：
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>所有属性名必须用双引号括起来，如 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">"title"</code></li>
                <li>字符串值必须用双引号括起来，如 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">"这是一个标题"</code></li>
                <li>数字无需引号，如 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">42</code> 或 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">3.14</code></li>
                <li>布尔值使用 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">true</code> 或 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">false</code>（无引号）</li>
                <li>数组使用方括号 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">[]</code>，元素用逗号分隔</li>
                <li>对象使用花括号 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">{}</code>，属性用逗号分隔</li>
                <li>最后一个元素后不加逗号</li>
              </ul>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">JSON示例：</h4>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto text-sm font-mono">
{`{
  "title": "产品标题",
  "description": "这是产品的详细描述",
  "price": 1299,
  "inStock": true,
  "features": [
    "高品质材料",
    "耐用设计",
    "多种颜色可选"
  ],
  "specifications": {
    "weight": "2.5kg",
    "dimensions": "30 x 20 x 10 cm",
    "material": "铝合金"
  }
}`}
                </pre>
              </div>
            </section>

            {/* 常见问题 */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                常见问题
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">我修改了内容，但网站没有更新？</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    保存更改后需要刷新相应页面。如果问题持续，请尝试清除浏览器缓存或使用私密/隐身模式访问。
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">保存JSON时提示格式错误？</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    检查JSON格式是否正确，特别注意引号、逗号和括号。您可以使用在线工具如 <a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer" className="text-primary">JSONLint</a> 来验证您的JSON。
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">上传的图片在哪里？</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    所有上传的图片存储在 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">public/images/</code> 目录下的相应子文件夹中，但在JSON数据中，您应该使用相对路径 <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">/images/目录/文件名</code>。
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">如何更改网站颜色或字体？</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    网站的样式是通过CSS文件定义的，不能通过内容管理系统更改。需要开发人员修改相应的样式文件。
                  </p>
                </div>
              </div>
            </section>

            {/* 支持联系 */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                需要帮助？
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                如果您在使用内容管理系统时遇到任何问题，请联系技术支持团队：
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>电子邮件：</strong> support@valentijapan.com<br />
                <strong>电话：</strong> +81-3-1234-5678
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* 图片管理指南 */}
      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">图片管理指南</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">上传图片</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              通过图片管理界面，您可以上传图片到合适的目录中，便于在网站中使用。
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>在左侧导航中点击<strong>图片管理</strong>。</li>
              <li>从左侧目录面板中选择合适的图片目录（如产品图片、团队照片等）。</li>
              <li>点击"选择图片"按钮，从您的电脑中选择一张图片。</li>
              <li>上传成功后，图片将显示在右侧列表中。</li>
              <li>点击图片下方的"复制路径"按钮，将图片路径复制到剪贴板。</li>
              <li>在内容管理页面编辑相应的JSON文件，粘贴图片路径到相应的字段中。</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">图片目录结构</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              为了保持网站内容的有组织性，图片按以下目录分类：
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>产品图片</strong> - 存放所有产品相关的图片</li>
              <li><strong>公司图片</strong> - 存放公司环境、办公室等图片</li>
              <li><strong>团队照片</strong> - 存放团队成员的个人照片</li>
              <li><strong>客户评价</strong> - 存放客户评价的人物照片</li>
              <li><strong>横幅图片</strong> - 存放网站横幅和大型广告图</li>
              <li><strong>其他图片</strong> - 存放未分类的杂项图片</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">图片使用建议</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>文件格式</strong> - 使用JPG、PNG、GIF或WebP格式的图片。</li>
              <li><strong>文件大小</strong> - 图片大小尽量控制在5MB以内，以确保网站加载速度。</li>
              <li><strong>图片命名</strong> - 使用有意义的名称，如"red-led-headlight.jpg"，避免使用中文或特殊字符。</li>
              <li><strong>图片尺寸</strong> - 产品图片建议使用800×600像素，横幅图片建议使用1920×600像素，团队照片建议使用400×400像素。</li>
              <li><strong>备份原图</strong> - 建议在您的电脑上保留一份高分辨率的原始图片备份。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 