import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

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
