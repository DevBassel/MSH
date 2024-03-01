import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card ID",
  description: "set Card ID",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
