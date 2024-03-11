"use client";

import Image from "next/image";

import { dateFromNow, formatImageUrl } from "@/utils/helpers";

function AuthorCard({ avatarUrl, loginName, score, githubUsername, createAt }) {
  return (
    <div className="w-80 p-5 flex flex-col gap-2 border border-gray-300 bg-white rounded-2xl">
      <div className="flex gap-4 items-center">
        <Image
          width={12}
          height={12}
          src={formatImageUrl(avatarUrl)}
          alt="avatar_url"
          className="w-12 h-12"
        />
        <span className="text-link hover:text-blue-400 hover:cursor-pointer">
          {loginName}
        </span>
      </div>

      <span>
        积分：<span>{score}</span>
      </span>
      <span>
        Github：
        <a
          className="link link-accent"
          href={`https://github.com/${githubUsername}`}
        >
          {githubUsername}
        </a>
      </span>
      <span>
        注册时间：
        <span>{dateFromNow(createAt)}</span>
      </span>
    </div>
  );
}

export default AuthorCard;
