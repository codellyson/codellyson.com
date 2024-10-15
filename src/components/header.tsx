"use client";

import { ActionIcon, Anchor, Button, Group, Stack, Text } from "@mantine/core";
import { IconBrandX } from "@tabler/icons-react";
import React from "react";
import { ColorSchemeToggle } from "./themeToggle";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <Group
      justify={"space-between"}
      align="center"
      pos="sticky"
      top={0}
      mb="xl"
      bg="#fff"
    >
      <Stack gap="xs">
        <Group gap="xs">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <Anchor fw="bolder" href="/" component={Link}>
            codellyson
          </Anchor>
        </Group>
      </Stack>

      <Group gap="xs">
        <Button
          variant="transparent"
          onClick={() => window.open("https://github.com/codellyson", "_blank")}
          px={0}
        >
          <Text span fw="bolder" size="sm">
            Github
          </Text>
        </Button>
        <Button
          variant="transparent"
          onClick={() => router.push("/blog")}
          px={0}
        >
          <Text span fw="bolder" size="sm">
            Blog
          </Text>
        </Button>
        <ActionIcon
          variant={"transparent"}
          onClick={() => window.open("https://x.com/codellyson", "_blank")}
        >
          <IconBrandX size={18} />
        </ActionIcon>

        {/* <ColorSchemeToggle /> */}
      </Group>
    </Group>
  );
};
