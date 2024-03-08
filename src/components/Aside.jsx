"use client";

import AuthorCard from "./AuthorCard";

import { ENDPOINT, fetcher } from "@/utils/helpers";
import useSWR from "swr";

export default function Aside({ loginName }) {
  const { data, error, isLoading } = useSWR(
    `${ENDPOINT}/user/${loginName}`,
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const author = data.data;

  return (
    <aside className="flex flex-col gap-4">
      <AuthorCard
        avatarUrl={author.avatar_url}
        loginName={author.loginname}
        score={author.score}
        githubUsername={author.githubUsername}
        createAt={author.create_at}
      />

      <div className="w-80 border border-gray-300 bg-white rounded-2xl">
        <div className="card-body">
          <h2 className="card-title">最近创建的话题</h2>
          <ul>
            {author.recent_topics.map((topic) => (
              <li key={topic.id}>
                <a
                  className="link link-accent line-clamp-1 mt-2"
                  href={topic.id}
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-80 border border-gray-300 bg-white rounded-2xl">
        <div className="card-body">
          <h2 className="card-title">最近参与的话题</h2>
          <ul>
            {author.recent_replies.map((topic) => (
              <li key={topic.id}>
                <a
                  className="link link-accent line-clamp-1 mt-2"
                  href={topic.id}
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
