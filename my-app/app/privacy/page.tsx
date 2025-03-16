import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '隐私政策 - 贸易制造业 ',
  description: '贸易制造业  的隐私政策，了解我们如何收集、使用和保护您的个人信息。',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">隐私政策</h1>
            <p className="text-lg">
              了解我们如何收集、使用和保护您的个人信息。
            </p>
          </div>
        </div>
      </div>

      {/* 隐私政策内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                最后更新日期：2023年6月1日
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. 引言</h2>
              <p className="text-gray-700 dark:text-gray-300">
                贸易制造业 （以下简称"我们"、"我们的"或"本公司"）尊重您的隐私，并致力于保护您的个人信息。本隐私政策描述了我们在您访问我们的网站 valentijapan.com（以下简称"网站"）时收集、使用和披露个人信息的方式，以及您与此相关的隐私权。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                我们建议您仔细阅读本隐私政策，以便了解我们如何处理您的信息。通过访问或使用我们的网站，您确认您已阅读并理解本隐私政策中描述的做法和政策。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. 我们收集的信息</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们可能会收集以下几类个人信息：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>个人识别信息：</strong>包括姓名、电子邮件地址、电话号码、邮寄地址等，当您通过我们的网站联系我们、订阅我们的新闻通讯或申请职位时提供的信息。
                </li>
                <li>
                  <strong>技术信息：</strong>包括互联网协议 (IP) 地址、浏览器类型和版本、时区设置和位置、浏览器插件类型和版本、操作系统和平台，以及您用于访问我们网站的设备相关信息。
                </li>
                <li>
                  <strong>使用数据：</strong>包括有关您如何使用我们的网站的信息，例如您访问的页面、您花费在每个页面上的时间、您点击的链接等。
                </li>
                <li>
                  <strong>营销和通信数据：</strong>包括您对接收我们营销信息的偏好，以及您与我们通信的偏好。
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. 我们如何收集您的信息</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们通过以下方式收集信息：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>直接互动：</strong>当您填写表单、与我们通信或以其他方式与我们的网站互动时，您可能会提供个人信息。
                </li>
                <li>
                  <strong>自动技术：</strong>当您与我们的网站互动时，我们可能会自动收集有关您的设备、浏览行为和使用模式的技术信息。我们使用cookies和其他类似技术来收集这些信息。
                </li>
                <li>
                  <strong>第三方：</strong>我们可能会从提供技术、支付和交付服务的第三方服务提供商、广告网络和分析提供商那里接收个人信息。
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. 我们如何使用您的信息</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们将您的个人信息用于以下目的：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>提供和管理我们的网站</li>
                <li>与您沟通并回应您的咨询</li>
                <li>向您提供有关我们产品和服务的信息、新闻和优惠</li>
                <li>管理和改进我们的业务和网站</li>
                <li>遵守法律义务</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. 信息披露</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们可能会将您的个人信息与以下各方共享：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>我们集团内的其他公司</li>
                <li>提供服务的服务提供商和业务合作伙伴</li>
                <li>法律要求的政府机构和监管机构</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                我们不会出售或出租您的个人信息给第三方用于他们自己的营销目的。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. 数据安全</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们实施了适当的安全措施，以防止您的个人信息被意外丢失、使用或访问、篡改或披露。此外，我们限制只有那些出于业务需要而必须知道的员工、代理商、承包商和其他第三方才能访问您的个人信息。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. 数据保留</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们将仅在达到收集目的所需的时间内保留您的个人信息，包括为了满足任何法律、会计或报告要求。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. 您的权利</h2>
              <p className="text-gray-700 dark:text-gray-300">
                根据适用的数据保护法律，您可能拥有以下权利：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>访问您的个人信息</li>
                <li>更正不准确的个人信息</li>
                <li>请求删除您的个人信息</li>
                <li>反对处理您的个人信息</li>
                <li>限制处理您的个人信息</li>
                <li>数据可携带性的权利</li>
                <li>撤回同意的权利</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                如果您希望行使这些权利，请通过以下联系方式与我们联系。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Cookie 政策</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们使用 cookie 和类似技术来改善您在我们网站上的体验。Cookie 是存储在您设备上的小型文本文件，当您访问网站时，它们可以被网站用来识别您的浏览器。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                我们使用以下类型的 cookie：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>必要的 cookie：</strong>这些 cookie 是网站正常运行所必需的，无法在我们的系统中关闭。
                </li>
                <li>
                  <strong>性能 cookie：</strong>这些 cookie 让我们能够统计访问量和流量来源，以便我们可以衡量和改进我们网站的性能。
                </li>
                <li>
                  <strong>功能 cookie：</strong>这些 cookie 使网站能够提供增强的功能和个性化设置。
                </li>
                <li>
                  <strong>定向 cookie：</strong>这些 cookie 可能由我们的广告合作伙伴通过我们的网站设置，用于构建您的兴趣档案并向您显示相关广告。
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                您可以通过更改浏览器设置来控制和删除 cookie。但是，如果您禁用 cookie，您可能无法使用我们网站的某些功能。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. 变更</h2>
              <p className="text-gray-700 dark:text-gray-300">
                我们可能会不时更新本隐私政策。我们建议您定期查看本页面以了解任何变更。变更后的隐私政策将在本页面上发布。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. 联系我们</h2>
              <p className="text-gray-700 dark:text-gray-300">
                如果您对本隐私政策有任何问题，或者想要行使您的数据保护权利，请联系我们：
              </p>
              <address className="not-italic text-gray-700 dark:text-gray-300 mt-4">
                <strong>贸易制造业 </strong><br />
                地址：123 汽车产业大道, 东京, 日本<br />
                电子邮件：privacy@valentijapan.com<br />
                电话：+81-3-1234-5678
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 