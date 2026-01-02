import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetMatch - Find Your Match Through Real Comparisons",
  description: "The dating app that uses fair, side-by-side comparisons with an ELO rating system. No more endless swiping - compare profiles and let your choices reveal who truly stands out.",
  keywords: ["dating app", "matchmaking", "ELO rating", "profile comparison", "fair dating"],
  authors: [{ name: "MeetMatch" }],
  openGraph: {
    title: "MeetMatch - Find Your Match Through Real Comparisons",
    description: "The dating app that uses fair, side-by-side comparisons with an ELO rating system.",
    type: "website",
    locale: "en_US",
    siteName: "MeetMatch",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetMatch - Find Your Match Through Real Comparisons",
    description: "The dating app that uses fair, side-by-side comparisons with an ELO rating system.",
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
        {children}
      </body>
    </html>
  );
}

