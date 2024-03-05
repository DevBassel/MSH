import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSH | feeds",
  description: "show your favorites companys feeds",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
