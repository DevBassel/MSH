import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { googleClientId } from "../util/googleClientId";
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "MSH",
    template: "MSH | %s",
  },
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
          <GoogleOAuthProvider clientId={googleClientId}>
            {children}
          </GoogleOAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
