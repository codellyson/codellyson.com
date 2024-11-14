import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.mdx$/, "");
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
        id: filename.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContent);
  
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as {
      pubDatetime: string;
      title: string;
    }),
  };
}
