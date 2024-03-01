import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password",
  description: "rest your password",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
