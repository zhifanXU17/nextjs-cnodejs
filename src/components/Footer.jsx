export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-gray-200">
      <div className="max-w-6xl mx-auto py-10">
        <p>
          <a className="hover:text-white" href="">
            RSS
          </a>
          <span className="inline-block mx-2">|</span>
          <a className="hover:text-white" href="">
            源码地址
          </a>
        </p>
        <p className="py-5">
          CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </p>
        <p>
          新手搭建 Node.js 服务器，推荐使用无需备案的{" "}
          <a className="underline" href="https://www.digitalocean.com/">
            DigitalOcean(https://www.digitalocean.com/)
          </a>
        </p>
      </div>
    </footer>
  );
}
