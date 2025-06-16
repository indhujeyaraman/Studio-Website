import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/component/Navbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Studio Portfolio",
  description: "Studio Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-light`}>
        {" "}
      <Navbar />
        {children}
      </body>
    </html>
  );
}
