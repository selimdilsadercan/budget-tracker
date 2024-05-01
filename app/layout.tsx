import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const font = Inter({ subsets: ["latin"] });

import ClerkProvider from "@/providers/clerk-provider";
import ThemeProvider from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Budget Tracker"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

export default Layout;
