import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // 1. Основные мета-теги для поисковиков (Google, Яндекс)
  title: "Ваша Мебель - Изготовление корпусной мебели на заказ",
  description: "Проектирование и производство кухонь, шкафов, прихожих и другой корпусной мебели по индивидуальным размерам. Качество, гарантия, быстрые сроки.",
  

  openGraph: {
    title: "Ваша Мебель - Мебель на заказ от производителя",
    description: "Воплотим любую вашу идею в качественную и стильную мебель.",
    images: ['https://picsum.photos/1200/630?random=0'], 
    url: 'https://vashamebel-site.vercel.app', 
    type: 'website',
  },
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