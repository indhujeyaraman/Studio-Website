import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
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
  styles: [
    {
      href: "https://fonts.googleapis.com/css2?family=Sacramento&display=swap",
      rel: "stylesheet"
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-light`}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
