"use client";
import { List, Anchor, ListItem, Text } from "@mantine/core";
import Link from "next/link";
import { Date } from "./date";

import utilStyles from "../app/utils.module.css";

interface BlogsProps {
  data: {
    id: string;
    pubDatetime: string;
    title: string;
  }[];
}

export const Blogs = ({ data }: BlogsProps) => {
  return (
    <List className={utilStyles.list}>
      {data.map(({ id, pubDatetime, title }) => (
        <ListItem className={utilStyles.listItem} key={id}>
          <Anchor component={Link} href={`/blog/posts/${id}`} fw="bold">
            {title}
          </Anchor>

          {/* <br /> */}
          <Text size="xs">
            <Date dateString={pubDatetime} />
          </Text>
        </ListItem>
      ))}
    </List>
  );
};
