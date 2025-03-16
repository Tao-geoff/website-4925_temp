import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '使用条款 - 贸易制造业 ',
  description: '贸易制造业  的使用条款，了解使用我们网站的条件和规定。',
};

export default function TermsPage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">使用条款</h1>
            <p className="text-lg">
              请仔细阅读这些条款，了解使用我们网站的条件和规定。
            </p>
          </div>
        </div>
      </div>

      {/* 使用条款内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                最后更新日期：2023年6月1日
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. 接受条款</h2>
              <p className="text-gray-700 dark:text-gray-300">
                欢迎访问 贸易制造业  网站（以下简称"网站"）。通过访问和使用本网站，您同意受这些条款和条件（以下简称"条款"）的约束。如果您不同意这些条款，请不要使用本网站。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                贸易制造业 （以下简称"我们"、"我们的"或"本公司"）保留随时修改、更改或更新这些条款的权利，恕不另行通知。您继续使用本网站将构成您对此类修改、更改或更新的接受。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. 使用网站</h2>
              <p className="text-gray-700 dark:text-gray-300">
                您同意仅将本网站用于合法目的，并以不侵犯他人权利或限制或阻止他人使用和享用本网站的方式使用本网站。禁止的行为包括但不限于骚扰或导致他人不便或烦恼，以及传输淫秽或冒犯性内容。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                我们保留以下权利：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>随时更改、暂停或终止网站或其任何部分的访问；</li>
                <li>根据我们的判断，限制部分功能或仅限特定用户访问；</li>
                <li>在违反这些条款的情况下，暂停或终止用户对网站的访问。</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. 知识产权</h2>
              <p className="text-gray-700 dark:text-gray-300">
                本网站的所有内容，包括但不限于文本、图形、徽标、图标、图像、音频剪辑、数字下载、数据编译和软件，均为 贸易制造业  或其内容提供商的财产，受国际版权法保护。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                未经我们明确书面许可，严禁复制、复制、修改、出版、传播、分发、公开展示、执行、转载或以任何方式利用本网站的任何内容。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. 用户内容</h2>
              <p className="text-gray-700 dark:text-gray-300">
                如果您通过本网站提交、上传、发布或分享任何内容（以下简称"用户内容"），您声明并保证：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>您拥有或已获得使用该用户内容的所有必要权利和许可；</li>
                <li>该用户内容不侵犯任何第三方的知识产权、隐私权或其他权利；</li>
                <li>该用户内容不包含诽谤、中伤、淫秽、暴力或其他非法或冒犯性材料；</li>
                <li>该用户内容不会引入病毒、蠕虫、木马或其他有害代码。</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                您授予我们非独家、免版税、可转让、可再许可、全球性的许可，以使用、复制、修改、改编、出版、传播、翻译和展示此类用户内容。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. 免责声明</h2>
              <p className="text-gray-700 dark:text-gray-300">
                本网站及其内容按"原样"和"可用"的基础提供，没有任何形式的明示或暗示的保证。在法律允许的最大范围内，贸易制造业  明确否认所有保证，包括但不限于适销性、特定目的适用性和非侵权性的默示保证。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                我们不保证本网站将不间断、及时、安全或无错误运行，也不保证错误将被纠正，或者本网站或提供它的服务器没有病毒或其他有害组件。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. 责任限制</h2>
              <p className="text-gray-700 dark:text-gray-300">
                在法律允许的最大范围内，贸易制造业  及其关联公司、许可方、服务提供商、员工、代理人、高管和董事均不对任何损害负责，包括但不限于直接的、间接的、特殊的、附带的、后果性的、惩罚性的或惩戒性的损害，无论是在合同、侵权行为（包括过失）、严格责任或其他理论下，由于您使用或无法使用本网站及其内容而导致的。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. 链接到第三方网站</h2>
              <p className="text-gray-700 dark:text-gray-300">
                本网站可能包含链接到第三方网站或资源的链接。这些链接仅为方便用户而提供，我们不对这些网站的内容、准确性或意见负责。当您离开我们的网站时，您应该注意并阅读您访问的任何其他网站的条款和隐私政策。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. 适用法律</h2>
              <p className="text-gray-700 dark:text-gray-300">
                这些条款和您对网站的使用受日本法律管辖，并按照日本法律解释，不考虑冲突法原则。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. 争议解决</h2>
              <p className="text-gray-700 dark:text-gray-300">
                与这些条款或网站相关的任何争议应通过谈判友好解决。如果无法通过谈判解决争议，则应提交给东京地方法院，作为唯一的专属管辖法院解决。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. 完整协议</h2>
              <p className="text-gray-700 dark:text-gray-300">
                这些条款构成您与我们之间关于使用本网站的完整协议，取代先前或同时的所有通信、提议和理解，无论是书面的还是口头的。
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. 联系我们</h2>
              <p className="text-gray-700 dark:text-gray-300">
                如果您对这些条款有任何问题，请联系我们：
              </p>
              <address className="not-italic text-gray-700 dark:text-gray-300 mt-4">
                <strong>贸易制造业 </strong><br />
                地址：123 汽车产业大道, 东京, 日本<br />
                电子邮件：legal@valentijapan.com<br />
                电话：+81-3-1234-5678
              </address>
              
              <p className="text-gray-700 dark:text-gray-300 mt-8">
                感谢您访问我们的网站。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 