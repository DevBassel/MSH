import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Suspense } from "react";
import Loading from "./(pages)/loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSH",
  description: "An Investment Platform",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className} dir={locale === "en" ? "ltr" : "rtl"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
