import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ваша Мебель - Мебель на заказ",
  description: "Индивидуальный дизайн, качественные материалы и профессиональная установка.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      {/* Эти классы теперь будут работать, потому что они определены в @theme */ }
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}