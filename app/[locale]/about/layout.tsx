import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "An Investment Platform",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
