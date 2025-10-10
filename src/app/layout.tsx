import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Web",
  description: "Portfolio Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
