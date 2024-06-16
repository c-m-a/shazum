import { Inter } from "next/font/google";
import "@/shared/styles/globals.css";
import Providers from "@/shared/utils/Providers";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "700",
});

export const metadata = {
  title: "Shazum | Email Newsletter",
  description: "Start your Newsletter with break your pocket, easy & simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
