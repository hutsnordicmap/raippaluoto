import type { Metadata } from "next";
import { Archivo, Outfit } from "next/font/google";
import { Footer, Header } from "@/app/components/Chrome";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raippaluoto.fi"),
  title: {
    default: "Raippaluoto",
    template: "%s – Raippaluoto",
  },
  description: "A guide to the island of Raippaluoto in the Kvarken Archipelago.",
  applicationName: "Raippaluoto",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-screen flex-col bg-black font-sans text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
