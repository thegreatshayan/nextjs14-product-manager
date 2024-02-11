import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "NextJs 14",
  description: "NextJS 14 Project",
};

const vazirFont = localFont({
  src: "../public/font/Vazir-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
      bg-slate-900 text-slate-200
      ${vazirFont.className}`}
      >
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
