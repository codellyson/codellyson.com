 
import "./globals.css"
 
import { MantineProvider, ColorSchemeScript } from "@mantine/core"
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
	title: "codellyson",
	description: "Frontend Developer",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider theme={{
					primaryColor:'violet',
				}}>{children}</MantineProvider>
				 <Analytics />
			</body>
		</html>
	)
}