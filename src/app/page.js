"use client";

import { useState } from "react";

import useSWR from "swr";
import { ENDPOINT, fetcher, chunk } from "@/utils/helpers";
import Topics from "@/components/Topics";

const PAGE_SIZE = 15;

export default function Home() {
  const [tab, setTab] = useState("");
  const { data, isLoading, error } = useSWR(
    `${ENDPOINT}/topics/?tab=${tab}`,
    fetcher,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeTab = (param) => {
    if (tab === param) {
      return;
    }

    setTab(param);
    setCurrentPage(1);
  };

  let topics = [];
  if (!isLoading && !error) {
    topics = [...chunk(data.data, PAGE_SIZE)];
  }

  return (
    <div className="mx-auto my-10 w-full max-w-6xl border border-gray-300 rounded-2xl bg-white p-5">
      <ul role="tablist" className="tabs tabs-bordered mb-4">
        <li
          role="tab"
          className={tab === "" ? "tab tab-active" : "tab"}
          onClick={() => handleChangeTab("")}
        >
          全部
        </li>
        <li
          role="tab"
          className={tab === "good" ? "tab tab-active" : "tab"}
          onClick={() => handleChangeTab("good")}
        >
          精华
        </li>
        <li
          role="tab"
          className={tab === "share" ? "tab tab-active" : "tab"}
          onClick={() => handleChangeTab("share")}
        >
          分享
        </li>
        <li
          role="tab"
          className={tab === "ask" ? "tab tab-active" : "tab"}
          onClick={() => handleChangeTab("ask")}
        >
          问答
        </li>
        <li
          role="tab"
          className={tab === "job" ? "tab tab-active" : "tab"}
          onClick={() => handleChangeTab("job")}
        >
          工作
        </li>
      </ul>

      {isLoading ? (
        <div className="flex flex-col gap-4">
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
        </div>
      ) : error ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
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
          <span>Oops！{`错误代码：${error.status}`}</span>
        </div>
      ) : (
        <Topics
          topics={topics[currentPage - 1]}
          pageCount={topics.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
