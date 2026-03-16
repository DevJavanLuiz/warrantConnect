import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://warrantconnect.com"),
  title: "WarrantConnect | Infraestrutura Digital Conectada",
  description:
    "WarrantConnect é uma infraestrutura digital que conecta serviços, APIs e aplicações através de uma arquitetura moderna baseada em microserviços.",
  openGraph: {
    title: "WarrantConnect | Infraestrutura Digital Conectada",
    description:
      "Hub central para aplicações, APIs e serviços com arquitetura moderna, segura e escalável.",
    url: "https://warrantconnect.com",
    siteName: "WarrantConnect",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WarrantConnect | Infraestrutura Digital Conectada",
    description:
      "Hub central para aplicações, APIs e serviços com arquitetura moderna, segura e escalável.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} bg-base text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
