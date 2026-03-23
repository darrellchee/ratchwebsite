import type { Metadata } from "next";
import "./globals.css";
import ScrollFrame from "@/components/ScrollFrame";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Ratch",
  description: "Ratch - Make friends with people. Compare profiles and track your stats.",
  keywords: ["social app", "ratch", "friends", "friendships", "networking", "community"],
  authors: [{ name: "Ratch" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ratch",
    description: "Ratch - Make friends with people. Compare profiles and track your stats.",
    type: "website",
    locale: "en_US",
    siteName: "Ratch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratch",
    description: "Ratch - Make friends with people. Compare profiles and track your stats.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <ScrollFrame>{children}</ScrollFrame>
        </LanguageProvider>
      </body>
    </html>
  );
}
