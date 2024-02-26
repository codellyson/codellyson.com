import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { remark } from "remark";

import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContent);

    return {
      id,
      ...(matterResult.data as {
        pubDatetime: string;
        title: string;
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.pubDatetime < b.pubDatetime) return 1;
    else return -1;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContent);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      pubDatetime: string;
      title: string;
    }),
  };
}
