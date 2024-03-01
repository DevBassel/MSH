import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "learn how to Investment",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
