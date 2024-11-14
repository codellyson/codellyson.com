import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { shadcnTheme } from "@/utils/theme";
import { shadcnCssVariableResolver } from "@/utils/cssVariablesResolver";
import '@/utils/style.css'
import '@/utils/syntax-highlight.css'
 import { Poppins } from 'next/font/google'
 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

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
      <body className={poppins.className}>
        <MantineProvider
          theme={shadcnTheme}
          cssVariablesResolver={shadcnCssVariableResolver}
        >
          <Container size="lg" py="lg">
            <Header />
            {children}
          </Container>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
