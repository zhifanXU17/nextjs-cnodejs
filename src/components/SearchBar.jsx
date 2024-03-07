"use client";

import { useEffect, useState, useRef } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    function handleFocusSearch(event) {
      if (
        event.code === "KeyK" &&
        (event.metaKey === true || event.ctrlKey === true)
      ) {
        inputRef.current.focus();
      }
    }

    document.addEventListener("keydown", handleFocusSearch);

    return () => {
      document.removeEventListener("keydown", handleFocusSearch);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (keyword === "") {
      return;
    }

    window.open(
      `https://www.google.com.hk/search?q=site:cnodejs.org+${keyword}`,
      "_blank",
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-sm input-bordered flex w-80 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="搜索"
          ref={inputRef}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
        {keyword !== "" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 opacity-70"
            onClick={() => setKeyword("")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </label>
    </form>
  );
}
