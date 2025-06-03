// import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Two14 Inc",
  description: "Grow Your Brand with Strategy, Storytelling & Design Expertise",
  keywords: [
    "Two14 Inc",
    "Web Development",
    "brand growth",
    "brand strategy",
    "storytelling",
    "design",
    "brand development",
    "digital marketing",
    "creative agency",
    "branding solutions",
    "marketing strategy",
    "visual identity"
  ],
  openGraph: {
    type: 'website',
    url: 'https://two14inc.com/',
    title: 'Two14 Inc | Elevate Your Brand',
    description:
      'Two14 Inc is a creative agency that specializes in brand growth through strategic storytelling and design expertise. We help businesses elevate their brand identity and connect with their audience.',
    siteName: 'Two14Inc',
    images: [
      {
        url: '/t14inc-logo.svg',
        width: 279,
        height: 279,
      },
    ],
  },
  // authors: [{ name: "Two14 Inc" }],
  // creator: "Two14 Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
