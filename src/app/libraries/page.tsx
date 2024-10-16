import { Anchor, Stack, Text } from "@mantine/core";
import React from "react";

const LibrariesPage = () => {
  const data = {
    personal: [
      {
        name: "ts-fcm-notification",
        description:
          "Send Firebase Cloud Messaging notifications with TypeScript",
        link: "https://www.npmjs.com/package/ts-fcm-notification",
      },
      {
        name: "mantine-tag-input",
        description: "Tag input component for Mantine",
        link: "https://www.npmjs.com/package/mantine-tag-input",
      },
    ],
    favorite: [
      {
        name: "Mantine UI Library",
        description: "React components and hooks library",
        link: "https://mantine.dev/",
      },
      {
        name: "Zustand",
        description:
          "A small, fast and scaleable bearbones state-management solution",
        link: "https://zustand-demo.pmnd.rs/",
      },
    ],
  };
  return (
    <Stack>
      <Text size="xl" fw={700}>
        Authored Libraries
      </Text>
      {data.personal.map((item) => (
        <Stack key={item.name} gap="xs">
          <Anchor
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            fw="bold"
          >
            {item.name}
          </Anchor>
          <Text>{item.description}</Text>
        </Stack>
      ))}

      <Text size="xl" fw={700}>
        Favorite Libraries
      </Text>
      {data.favorite.map((item) => (
        <Stack key={item.name} gap="xs">
          <Anchor
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            fw="bold"
          >
            {item.name}
          </Anchor>
          <Text>{item.description}</Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default LibrariesPage;
