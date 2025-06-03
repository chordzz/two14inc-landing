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
