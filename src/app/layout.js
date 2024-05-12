import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Practicas Parciales",
  description: "Practica y entrenate para rendir los parciales de la manera mas entretenida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none">
      <body className={inter.className} style={{ position: "relative", minHeight: "100vh" }}>
        <Navbar />
        <main>{children}</main>
        <Footer style={{ position: "fixed", width: "100%", marginBottom: "0" }} />
      </body>
    </html>
  );
}
