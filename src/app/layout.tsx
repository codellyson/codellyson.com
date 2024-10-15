import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";

export const metadata = {
  title: "codellyson",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            primaryColor: "dark",
          }}
        >
          <Container size="xs" py="lg">
            <Header />
            {children}
          </Container>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
