import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DT · I build worlds around human needs.",
  description:
    "Founder ecosystem — brands, communities, and experiences built at the intersection of humanity, technology, and imagination. Building toward 2030 and beyond.",
  openGraph: {
    title: "DT · Founder Ecosystem",
    description:
      "One person. Multiple worlds. One connected vision for the future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
