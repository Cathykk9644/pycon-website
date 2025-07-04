import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ToCFooter from "./ToCFooter";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The leading Python Conference in Hong Kong",
  description:
    "PyCon Hong Kong is the leading Python conference in Hong Kong, bringing together Python enthusiasts to share their insights and foster collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en_US">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
