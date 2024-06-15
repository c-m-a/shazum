import { Inter } from "next/font/google";
import "@/shared/styles/globals.css";
import Providers from "@/shared/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shazum | Email Newsletter",
  description: "Start your Newsletter with break your pocket, easy & simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
