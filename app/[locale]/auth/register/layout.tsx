import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create an account",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
