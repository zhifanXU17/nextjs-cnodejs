"use client";

import useSWR from "swr";
import {
  ENDPOINT,
  fetcher,
  renderMarkdownToHTML,
  dateFromNow,
} from "@/utils/helpers";

import ReplyList from "@/components/ReplyList";
import Aside from "@/components/Aside";

export default function Page({ params }) {
  const { data, isLoading, error } = useSWR(
    `${ENDPOINT}/topic/${params.slug}`,
    fetcher,
  );

  let postingDetail = null;
  if (!isLoading && !error) {
    postingDetail = data.data;
  }

  return isLoading ? (
    <div className="border border-gray-300  w-full max-w-6xl my-10 mx-auto rounded-2xl bg-white p-5">
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  ) : error ? (
    <div role="alert" className="alert alert-error max-w-6xl my-10 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Oops... 页面加载失败</span>
      <p>{error.toString()}</p>
    </div>
  ) : (
    <div className="flex justify-between gap-4 h-full max-w-6xl my-10 mx-auto">
      <article className="flex-1 p-5 h-fit mx-auto rounded-2xl border border-gray-300 bg-white">
        <header className="border-b border-b-gray-300 pb-6">
          <h2 className="card-title mb-2">{postingDetail.title}</h2>
          <div className="flex gap-2 text-xs text-gray-400">
            <span>{dateFromNow(postingDetail.create_at)}</span>•
            <span>作者:</span>
            <span className="text-link hover:text-blue-400 hover:cursor-pointer">
              {postingDetail.author.loginname}
            </span>
            •<span>{postingDetail.visit_count}次浏览</span> •<span>来自:</span>
            <span>分享</span>
          </div>
        </header>

        <section className="py-6 max-w-4xl">
          <div
            dangerouslySetInnerHTML={renderMarkdownToHTML(
              postingDetail.content,
            )}
          />
        </section>

        <ReplyList
          replies={postingDetail.replies}
          replyCount={postingDetail.reply_count}
        />
      </article>

      <Aside loginName={postingDetail.author.loginname} />
    </div>
  );
}
