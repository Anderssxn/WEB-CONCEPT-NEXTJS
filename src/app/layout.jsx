import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GONET",
  description:
    "Conecta y disfruta. Fibra de alta velocidad y estabilidad sin interrupciones. Venezuela.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full">
      <body className={inter.className + " transition-bg duration-100"}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
