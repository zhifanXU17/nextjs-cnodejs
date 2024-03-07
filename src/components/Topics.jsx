import Topic from "@/components/Topic";

export default function Topics({
  topics,
  pageCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <>
      <ul>
        {topics.map((item) => (
          <Topic
            key={item.id}
            avatar={item.author.avatar_url}
            replyCount={item.reply_count}
            visitCount={item.visit_count}
            tab={item.tab}
            title={item.title}
            postingId={item.id}
            lastReplyTime={item.last_reply_at}
          />
        ))}
      </ul>

      <div className="join ml-4 mt-4">
        {[...Array(pageCount).keys()].map((page) => (
          <input
            key={page}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={page + 1}
            value={page + 1}
            onChange={(e) => setCurrentPage(parseInt(e.target.value))}
            checked={currentPage === page + 1}
          />
        ))}
      </div>
    </>
  );
}
