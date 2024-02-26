import Link from "next/link";
import { Date } from "@/components/date";
import { siteTitle } from "./posts/[id]/layout";
import utilStyles from "../utils.module.css";

import { getSortedPostsData } from "@/lib/post";
import { Anchor, List, ListItem, Space, Text, Title } from "@mantine/core";

type AllPostsData = {
  pubDatetime: string;
  title: string;
  id: string;
}[];

export const metadata = {
  title: siteTitle,
};

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Title order={3} className={utilStyles.headingLg}>
          Blog Posts
        </Title>
        <Space h={10} />
        <List className={utilStyles.list}>
          {allPostsData.map(({ id, pubDatetime, title }) => (
            <ListItem className={utilStyles.listItem} key={id}>
              <Anchor component={Link} href={`/blog/posts/${id}`}>
                {title}
              </Anchor>

              {/* <br /> */}
              <Text size="xs">
                <Date dateString={pubDatetime} />
              </Text>
            </ListItem>
          ))}
        </List>
      </section>
    </>
  );
}
