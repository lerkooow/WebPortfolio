import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Web",
  description: "Portfolio Web",
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <html lang={params.locale}>
      <body className={`${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}
