import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer, Header } from "@/app/components/Chrome";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
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
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
