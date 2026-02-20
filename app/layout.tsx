"use client";

import type React from "react";
import "./globals.css";
import { Inter, Archivo } from "next/font/google";
import MainHeader from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";
import WhatsAppButton from "@/components/whatsapp-button";
import Preloader from "@/components/preloader";
import MailFloatingButton from "@/components/ui/mail-floating-button";
import PageWrapper from "@/components/PageWrapper";
import GoogleTranslate from "@/components/GoogleTranslate";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <Preloader />
          <MainHeader />
          
          <PageWrapper>
            {children}
          </PageWrapper>

          <GoogleTranslate /> 
          <Footer />
          <MailFloatingButton />
          <ScrollToTop />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}