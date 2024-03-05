import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Face ID",
  description: "set your face id",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
