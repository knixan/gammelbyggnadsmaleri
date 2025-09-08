// src/app/layout.tsx
import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "./globals.css";

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gammel Byggnadsmåleri - Traditionellt Måleri i Vadstena",
  description:
    "Experter på traditionellt måleri för gamla byggnader i Vadstena med omnejd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${oldStandardTT.className} bg-gray-100 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
