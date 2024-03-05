import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "login to your account",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
