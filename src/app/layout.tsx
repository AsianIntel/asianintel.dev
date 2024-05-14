import { Inter } from "next/font/google";
import { AnalyticsWrapper } from "./components/analytics";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "AsianIntel | Gautam Abhyankar"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} font-sans`}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
