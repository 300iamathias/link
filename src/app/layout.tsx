import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JIMBRA | Todo lo que necesitas",
  description:
    "Somos una empresa de Tecnología, brindamos servicios para la comunidad.",
  keywords: [
    "Jimbra",
    "Tecnología",
    "Guayaquil",
    "Servicios IT",
  ],
  authors: [{ name: "Jimbra" }],
  icons: {
    icon: "/jimbra-logo.png",
  },
  openGraph: {
    title: "JIMBRA | Todo lo que necesitas",
    description:
      "Somos una empresa de Tecnología, brindamos servicios para la comunidad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JIMBRA | Todo lo que necesitas",
    description:
      "Somos una empresa de Tecnología, brindamos servicios para la comunidad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
