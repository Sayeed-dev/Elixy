import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Poppins } from "next/font/google";
import { LogProvider } from "@/context/logContext";

export const metadata = {
  title: " ELIXY",
  description: "View your interaction statistics",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`min-h-full flex flex-col ${poppins.className} antialiased`}
      >
        <Header />
        <LogProvider>{children}</LogProvider>
        <Footer />
      </body>
    </html>
  );
}
