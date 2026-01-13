import type { Metadata } from "next";
import "./globals.css";
import ScrollFrame from "@/components/ScrollFrame";

export const metadata: Metadata = {
  title: "Ratch",
  description: "Ratch - Rate and match with people. Compare profiles, track your stats, and climb the leaderboard.",
  keywords: ["dating app", "ratch", "relationships", "dating", "rating", "matching"],
  authors: [{ name: "Ratch" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ratch",
    description: "Ratch - Rate and match with people. Compare profiles, track your stats, and climb the leaderboard.",
    type: "website",
    locale: "en_US",
    siteName: "Ratch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratch",
    description: "Ratch - Rate and match with people. Compare profiles, track your stats, and climb the leaderboard.",
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
        <ScrollFrame>{children}</ScrollFrame>
      </body>
    </html>
  );
}
