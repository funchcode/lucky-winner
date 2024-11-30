import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const yonePickBold = localFont({
  src: '../fonts/YOnepick/YOnepick-Bold.woff',
  variable: '--font-yonepick-bold',
});
const yonePick = localFont({
  src: '../fonts/YOnepick/YOnepick-Regular.woff',
  variable: '--font-yonepick',
});

export const metadata: Metadata = {
  title: "이달의 리뷰어 | 체리오네일",
  description: "체리오네일 모현점",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${yonePickBold.variable} ${yonePick.variable}`}>
        {children}
      </body>
    </html>
  );
}
