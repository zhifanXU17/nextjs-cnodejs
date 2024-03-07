import Link from "next/link";
import Image from "next/image";

import logo from "@/app/public/cnodejsLogo.svg";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="h-16 bg-slate-900">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4">
        <div className="flex flex-1 gap-4">
          <Link href="/">
            <Image
              src={logo}
              alt="CNode logo"
              className="h-full w-32 hover:cursor-pointer"
              priority={true}
            />
          </Link>

          <SearchBar />
        </div>

        <Link href="/">
          <span className="text-gray-200 hover:cursor-pointer hover:text-white">
            首页
          </span>
        </Link>

        <Link href="/beginner">
          <span className="text-gray-200 hover:cursor-pointer hover:text-white">
            新手入门
          </span>
        </Link>

        <Link href="/about">
          <span className="text-gray-200 hover:cursor-pointer hover:text-white">
            关于
          </span>
        </Link>
      </nav>
    </header>
  );
}
