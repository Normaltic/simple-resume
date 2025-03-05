import localFont from "next/font/local";
import SyncThemeScript from "@/components/widget/SyncThemeScript";

import "./globals.css";
import ThemeWidget from "@/components/widget/ThemeWidget";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <SyncThemeScript />
      </head>
      <body className={`${pretendard.className} linear-transition-color`}>
        <header className="bg-primary print:bg-transparent h-6" />
        <main className="max-w-4xl m-auto p-6">
          {children}
          <ThemeWidget className="fixed bottom-8 right-8 print:hidden" />
        </main>
        <footer className="bg-primary print:bg-transparent h-6" />
      </body>
    </html>
  );
}
