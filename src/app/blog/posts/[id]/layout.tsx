// import './globals.css'
import Image from "next/image";
import styles from "../../layout.module.css";
import utilStyles from "../../../utils.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Anchor, Box, Button, Container } from "@mantine/core";
import { Header } from "@/components/header";
import { IconArrowLeft } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

const name = "Codellyson";
export const siteTitle = "Codellyson";

export const metadata = {
  title: "Blog",
  description: "Codellyson Blog",
};

export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode;

  // TODO: remove this, separate header component from layout, convert Header component to client component and check if is home by getting the current route using usePathname hook
  home?: boolean;
}) {
  return (
    <Box>
      <Anchor component={Link} href={"/blog"} 
      
      >
        back to blog
      </Anchor>
      {children}
    </Box>
  );
}
