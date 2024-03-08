"use client";

import Link from "next/link";
import Image from "next/image";

import { formatImageUrl, dateFromNow } from "@/utils/helpers";

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

  const timeTag = dateFromNow(lastReplyTime);

  return (
    <li className="flex items-center justify-between gap-6 p-2.5">
      <Image
        alt="Avatar of User"
        src={formatImageUrl(avatar)}
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
        href={`/topic/${postingId}`}
      >
        {title}
      </Link>

      <span className="text-gray-400">{timeTag}</span>
    </li>
  );
}
