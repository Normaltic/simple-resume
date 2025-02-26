import localFont from "next/font/local";

import "./globals.css";

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
    <html lang="ko">
      <body className={`${pretendard.className}`}>
        <header className="bg-primary h-6" />
        <main className="max-w-4xl m-auto p-6">{children}</main>
        <footer className="bg-primary h-6" />
      </body>
    </html>
  );
}
