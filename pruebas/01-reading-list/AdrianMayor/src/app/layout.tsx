import ReduxProvider from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Book Reader Project",
	description: "A place to read all your favorite books",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<ReduxProvider> {children}</ReduxProvider>
			</body>
		</html>
	);
}
