import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Tracker"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
