import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/effects/SmoothScrolling";
import Cursor from "../components/effects/Cursor";
import { Toaster } from "@/components/ui/sonner"
import { Playwrite_MX_Guides } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vishankh Bhardwaj | Full Stack Developer",
  description: "Portfolio of Vishank Bhardwaj",
};
const playwrite = Playwrite_MX_Guides({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playwrite",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
    >
      <body className={` min-h-full flex flex-col`}>
        <Cursor />
        <SmoothScrolling>
          {children}
          <Toaster />
        </SmoothScrolling>
      </body>
    </html>
  );
}
