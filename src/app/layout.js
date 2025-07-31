import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { ModalProvider } from "@/context/ModalContext"; // Импорт провайдера
import ContactModal from "@/components/ContactModal";
import ScrollToTop from "@/components/ScrollToTop";

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
      <body>
        <ModalProvider> {/* 1. Оборачиваем всё в провайдер */}
          <ScrollToTop />
          <div className={`${inter.className} bg-background text-text`}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
          <ContactModal /> {/* 2. Добавляем модальное окно сюда */}
        </ModalProvider>
      </body>
    </html>
  );
}