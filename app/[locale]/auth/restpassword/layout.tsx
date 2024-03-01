import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset password",
  description: "to reset your password",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
