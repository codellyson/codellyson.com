"use client";

import Link from "next/link";
import { Anchor, Box } from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Anchor component={Link} href={"/blog"} mb="md">
        back to blog
      </Anchor>

      {children}
    </Box>
  );
}
