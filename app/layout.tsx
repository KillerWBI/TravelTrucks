import Header from "@/component/Header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Camper Rental | Campervan Booking Platform",
  description:
    "Modern campervan rental service. Filters, reviews, booking form and detailed camper specifications.",
  keywords: [
    "camper rental",
    "campervan",
    "travel",
    "vanlife",
    "booking",
  ],
  openGraph: {
    title: "Camper Rental",
    description:
      "Book campervans with reviews, photos and full specifications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-inter">
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        {children}
      </body>
    </html>
  );
}
