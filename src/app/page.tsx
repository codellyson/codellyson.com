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
} from "@mantine/core";

 

import { ColorSchemeToggle } from "./_components/themeToggle";
import { IconBrandGithub, IconBrandX, IconLink, IconWebhook, IconX } from "@tabler/icons-react";
 
export default function Home() {
  
   return (
    <Box mih={"100vh"} miw={"100vw"}>
      <Container size="xs">
        <Stack py={"xl"} justify="space-between">
          <Group justify={"space-between"} align="center">
            <Stack gap="xs">
              <Group gap='xs'>
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
                <Text fw='bolder'>codellyson</Text>
              </Group>
              <Text size={"xs"} variant="text">
                Frontend Developer
              </Text>
            </Stack>

            <Group gap="xs">
              <ActionIcon
                variant={"transparent"}
                onClick={() =>
                  window.open("https://github.com/codellyson", "_blank")
                }
              >
                <IconBrandGithub size={18} />
              </ActionIcon>
              <ActionIcon
                variant={"transparent"}
                onClick={() =>
                  window.open("https://x.com/codellyson", "_blank")
                }
              >
                <IconBrandX size={18} />
              </ActionIcon>
              <ActionIcon
                variant={"transparent"}
                onClick={() =>
                  window.open("https://blog.codellyson.com", "_blank")
                }
              >
                <IconLink size={18} />
              </ActionIcon>
              <ColorSchemeToggle />
            </Group>
          </Group>
          <div>
            <article>
              <div>
                <h2>projects</h2>
              </div>
              <List>
                <List.Item>
                  <Anchor href="https://techchak.com">
                    <div>
                      <Text fw='bold'>Techchak</Text>
                    </div>
                    <span>
                      An all-in-one AI-Powered platform for creators, and
                      knowledge experts to effortlessly create courses, coaching
                      sessions, manage memberships, communities, and earn.
                    </span>
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="https://druve.com.ng">
                    <div>
                    <Text fw='bold'>Druve </Text>
                    </div>
                    <span>Building the future of Advertising Solutions</span>
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="https://ranse.finance">
                    <div>
                    <Text fw='bold'>Ranse Finance</Text>
                    </div>
                    <span>cross-border payments for Africa</span>
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href="https://pilotx.ca">
                    <div>
                    <Text fw='bold'>Pilot X </Text>
                    </div>
                    <span>
                      a moving company that provides a wide range of services to
                      suit your needs.
                    </span>
                  </Anchor>
                </List.Item>
              </List>
            </article>
          </div>
          <Box>
            <Text size={"xs"} variant="text">
              © {new Date().getFullYear()} codellyson
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
