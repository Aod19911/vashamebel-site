'use client'; 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaInstagram, FaViber, FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // --- НАША НОВАЯ ФУНКЦИЯ ДЛЯ ПЛАВНОЙ ПРОКРУТКИ ---
  const handleHashLinkClick = (event, hash) => {
    // Если мы уже на главной, предотвращаем стандартный переход
    if (window.location.pathname === '/') {
      event.preventDefault();
    }
    
    // Находим целевую секцию по ID
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      // И плавно прокручиваем к ней
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    closeMenu(); // Закрываем мобильное меню
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${isScrolled || isMenuOpen ? 'bg-secondary shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Левый блок */}
        <Link href="/" onClick={closeMenu} className="text-primary font-bold text-2xl z-10">
          Ваша Мебель
        </Link>

        {/* Центральный блок (десктоп) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#services" onClick={(e) => handleHashLinkClick(e, '#services')}>Услуги</Link>
          <Link href="/#projects" onClick={(e) => handleHashLinkClick(e, '#projects')}>Проекты</Link>
          <Link href="/#about" onClick={(e) => handleHashLinkClick(e, '#about')}>О нас</Link>
          <Link href="/sales">Скидки</Link> {/* Обычная ссылка, без обработчика */}
          <Link href="/#contact" onClick={(e) => handleHashLinkClick(e, '#contact')}>Контакты</Link>
        </div>
        
        {/* Правый блок (десктоп) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="tel:+375255122567" className="text-text font-bold hover:text-primary transition-colors">+375(25)512-25-67</Link>
          <a href="https://www.instagram.com/vasha_mebel.mogilev/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl">
            <FaInstagram />
          </a>
          <a href="viber://chat?number=%2B375255122567" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl">
            <FaViber />
          </a>
        </div>
        
        {/* Гамбургер (мобильные) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Выпадающее мобильное меню */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-secondary pb-4`}>
        <Link href="/#services" onClick={(e) => handleHashLinkClick(e, '#services')} className="block text-center py-3 text-lg text-text hover:bg-primary/20 transition-colors">Услуги</Link>
        <Link href="/#projects" onClick={(e) => handleHashLinkClick(e, '#projects')} className="block text-center py-3 text-lg text-text hover:bg-primary/20 transition-colors">Проекты</Link>
        <Link href="/#about" onClick={(e) => handleHashLinkClick(e, '#about')} className="block text-center py-3 text-lg text-text hover:bg-primary/20 transition-colors">О нас</Link>
        <Link href="/sales" onClick={closeMenu} className="block text-center py-3 text-lg text-text hover:bg-primary/20 transition-colors">Скидки</Link>
        <Link href="/#contact" onClick={(e) => handleHashLinkClick(e, '#contact')} className="block text-center py-3 text-lg text-text hover:bg-primary/20 transition-colors">Контакты</Link>
        
        <div className="border-t border-gray-700 mx-8 my-4"></div>
        
        <Link href="tel:+375255122567" onClick={closeMenu} className="flex items-center justify-center gap-2 py-3 text-lg text-text">
          <FaPhoneAlt />
          <span>+375(25)512-25-67</span>
        </Link>
        
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com/vasha_mebel.mogilev/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-3xl"><FaInstagram /></a>
          <a href="viber://chat?number=%2B375255122567" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-3xl"><FaViber /></a>
        </div>
      </div>
    </header>
  );
}