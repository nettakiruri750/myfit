import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyFit - Fitness Tracker | Netta Wangui Kiruri",
  description: "Log workouts, track sets and reps, and see your progress. Built by Netta Wangui Kiruri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}