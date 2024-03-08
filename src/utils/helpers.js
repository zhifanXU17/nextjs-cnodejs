import * as DOMPurify from "dompurify";

import * as dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

export const ENDPOINT = "https://cnodejs.org/api/v1/";

export async function fetcher(endpoint) {
  const response = await fetch(endpoint);

  if (response.ok === false) {
    const error = new Error("获取数据失败");
    error.info = response.statusText;
    error.status = response.status;

    throw error;
  }

  return response.json();
}

export function chunk(array, size = 1) {
  size = Math.max(size, 0);

  if (!array || !array.length || size < 1) {
    return [];
  }

  let index = 0;
  const result = new Array(Math.ceil(array.length / size));

  while (index < array.length) {
    result[index / size] = array.slice(index, (index += size));
  }

  return result;
}

export function dateFromNow(date) {
  return dayjs(date).fromNow();
}

export function formatImageUrl(url) {
  if (url.includes("http") || url.includes("https")) {
    return url;
  } else {
    return `https:${url}`;
  }
}

export function renderMarkdownToHTML(markdown) {
  const renderedHTML = DOMPurify.sanitize(markdown);

  return {
    __html: renderedHTML,
  };
}
