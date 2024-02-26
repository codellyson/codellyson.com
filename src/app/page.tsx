"use client";

import {
  Box,
  Container,
  Group,
  Stack,
  Text,
  Anchor,
  ActionIcon,
  List,
  Title,
} from "@mantine/core";

import { ColorSchemeToggle } from "../components/themeToggle";
import {
  IconBrandGithub,
  IconBrandX,
  IconLink,
  IconWebhook,
  IconX,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <Stack justify="space-between">
       
        <Title order={3}>Projects</Title>

        <List>
          <List.Item>
            <Anchor href="https://techchak.com">
              <Text fw="bold">Techchak</Text>

              <Text span>
                An all-in-one AI-Powered platform for creators, and knowledge
                experts to effortlessly create courses, coaching sessions,
                manage memberships, communities, and earn.
              </Text>
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://druve.com.ng">
              <Text fw="bold">Druve </Text>

              <Text span>Building the future of Advertising Solutions</Text>
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://ranse.finance">
              <Text fw="bold">Ranse Finance</Text>

              <Text span>cross-border payments for Africa</Text>
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href="https://pilotx.ca">
              <Text fw="bold">Pilot X </Text>
              <Text span>
                a moving company that provides a wide range of services to suit
                your needs.
              </Text>
            </Anchor>
          </List.Item>
        </List>
      

      <Box>
        <Text size={"xs"} variant="text">
          © {new Date().getFullYear()} codellyson
        </Text>
      </Box>
    </Stack>
  );
}
