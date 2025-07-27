import Link from 'next/link';
import { FaInstagram, FaTelegramPlane, FaViber } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-700 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Левая часть: Лого и копирайт */}
        <div>
          <Link href="/" className="text-primary font-bold text-2xl">
            Ваша Мебель
          </Link>
          <p className="text-text-dark mt-2">
            © {new Date().getFullYear()} Ваша мебель. Все права защищены.
          </p>
        </div>

        {/* Правая часть: Соцсети */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://www.instagram.com/vasha_mebel.mogilev/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl">
            <FaTelegramPlane />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl">
            <FaViber />
          </a>
        </div>
      </div>
    </footer>
  );
}