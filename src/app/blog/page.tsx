import utilStyles from "../utils.module.css";
import { getSortedPostsData } from "@/lib/post";
import { Space, Title } from "@mantine/core";
import { Blogs } from "@/components/list";

type AllPostsData = {
  pubDatetime: string;
  title: string;
  id: string;
}[];

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Title order={3} className={utilStyles.headingLg}>
          Blog Posts
        </Title>
        <Space h={10} />
        <Blogs data={allPostsData} />
      </section>
    </>
  );
}
