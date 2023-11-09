 
import "./globals.css"
 
import { MantineProvider, ColorSchemeScript } from "@mantine/core"

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
			</body>
		</html>
	)
}