import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://karengonzalezdev.github.io/portfolio"),

  openGraph: {
    title: "Karen Gonzalez Portfolio",
    description: "Portfolio generated with Next.js",
    images: [
      {
        url: "https://raw.githubusercontent.com/karengonzalezdev/Images/main/HomePage.PNG",
        width: 800,
        heigh: 600,
        alt: "portfolio"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
