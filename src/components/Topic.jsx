"use client";

import Link from "next/link";
import Image from "next/image";

import * as dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

export default function Topic({
  avatar,
  replyCount,
  visitCount,
  tab,
  title,
  postingId,
  lastReplyTime,
}) {
  let tag;
  if (tab === "share") {
    tag = <div className="badge badge-success text-xs text-white">分享</div>;
  } else if (tab === "job") {
    tag = <div className="badge badge-primary text-xs text-white">招聘</div>;
  } else if (tab === "ask") {
    tag = <div className="badge badge-info text-xs text-white">问答</div>;
  }

  let avatarUrl = avatar;
  if (!avatarUrl.includes("http") || !avatarUrl.includes("https")) {
    avatarUrl = `http:${avatarUrl}`;
  }

  const timeTag = dayjs(lastReplyTime).fromNow();

  return (
    <li className="flex items-center justify-between gap-6 p-2.5">
      <Image
        alt="Avatar of User"
        src={avatarUrl}
        className="h-8 w-8 rounded-full"
        width={32}
        height={32}
      />

      <div className="w-24 text-center">
        <em className="text-base text-violet-800">{replyCount}</em>/
        <em className="text-gray-400">{visitCount}</em>
      </div>

      {tag}

      <Link
        className="text-link line-clamp-1 flex-1 hover:text-blue-400"
        href={`/posting/${postingId}`}
      >
        {title}
      </Link>

      <span className="text-gray-400">{timeTag}</span>
    </li>
  );
}
