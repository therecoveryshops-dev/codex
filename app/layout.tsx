import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "North Texas Equestrian Center | Luxury Riding Lessons and Boarding",
  description:
    "A premium redesign concept for North Texas Equestrian Center, offering riding lessons, boarding, camps, competition training, and elite equestrian facilities in Wylie, Texas.",
  openGraph: {
    title: "Ride With Confidence. Train With Excellence.",
    description:
      "Premier horseback riding lessons, boarding, camps, and competition training in North Texas.",
    url: "https://ntecdfw.com",
    siteName: "North Texas Equestrian Center",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
