"use client";

import {
  Box,
  Container,
 
  Group,
  Stack,
  Text,
  
  Anchor,
} from "@mantine/core";
 
import { useState } from "react";
 
import { ColorSchemeToggle } from "./_components/themeToggle";



export default function Home() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;
  return (
    <Box mih={"100vh"} miw={"100vw"} className="bg-gray-100 dark:bg-mtn-dark-8">
      <Container size="xs">
        <Stack py={"xl"}>
          <Group justify={"space-between"} align="center">
            <Stack gap="xs">
              <div className="flex items-center space-x-2">
                <svg
                  className="   w-8 text-blue-500 dark:text-white"
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
                <Text className="text-3xl font-bold text-gray-800 dark:text-white">
                  codellyson
                </Text>
              </div>
              <Text size={"xs"} variant="text">
                Frontend Developer
              </Text>
            </Stack>

            <ColorSchemeToggle />
          </Group>
          <div className="container flex flex-col space-y-2">
            <article className="pt-6">
              <div className="space-y-1">
                <h2 className="font-mono text-lg tracking-tighter">projects</h2>
              </div>
              <ul className="space-y-4 py-4">
                <li>
                  <Anchor
                    className="flex flex-col space-y-1.5 !no-underline"
                    href="https://techchak.com"
                  >
                    <div>
                      <span className="font-medium underline underline-offset-4 ">
                        techchak
                      </span>
                    </div>
                    <span className="text-muted-foreground text-dark-text">
                     An all-in-one AI-Powered platform for creators, and knowledge experts to effortlessly create courses, coaching sessions, manage memberships, communities, and earn.
                    </span>
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    className="flex flex-col space-y-1.5 !no-underline"
                    href="https://druve.com.ng"
                  >
                    <div>
                      <span className="font-medium underline underline-offset-4 ">
                        druve{" "}
                      </span>
                       
                    </div>
                    <span className="text-muted-foreground text-dark-text">
                    Building the future of Advertising Solutions
                    </span>
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    className="flex flex-col space-y-1.5 !no-underline"
                    href="https://ranse.finance"
                  >
                    <div>
                      <span className="font-medium underline underline-offset-4 ">
                        ranse-finance
                      </span>
                     
                    </div>
                    <span className="text-muted-foreground text-dark-text">
                     cross-border payments for Africa
                    </span>
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    className="flex flex-col space-y-1.5 !no-underline"
                    href="https://pilotx.ca"
                  >
                    <div>
                      <span className="font-medium underline underline-offset-4 ">
                        pilot x delivery
                      </span>
                     
                    </div>
                    <span className="text-muted-foreground text-dark-text">
                    a moving company that provides a wide range of services to suit your needs.
                    </span>
                  </Anchor>
                </li>
             
              </ul>
            </article>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
