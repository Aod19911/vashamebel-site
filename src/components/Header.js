'use client'; 
import { FaInstagram, FaTelegramPlane, FaViber } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import Link from 'next/link';
// 1. Импортируем иконки для меню
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // 2. Новое состояние для отслеживания открытия мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Функция для закрытия меню при клике на ссылку
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out
        ${isScrolled || isMenuOpen ? 'bg-secondary shadow-lg' : 'bg-transparent'}
      `}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" onClick={closeMenu} className="text-primary font-bold text-2xl">
          Ваша Мебель
        </Link>
        <Link href="tel:+375255122567" className="text-text">+375(25)512-25-67</Link>

        {/* Навигация для больших экранов */}
        <div className="hidden md:flex space-x-6 text-text items-center">
          <Link href="/#services" className="hover:text-primary transition-all duration-200 ease-in-out hover:scale-105">Услуги</Link>
          <Link href="/#projects" className="hover:text-primary transition-all duration-200 ease-in-out hover:scale-105">Проекты</Link>
          <Link href="/#about" className="hover:text-primary transition-all duration-200 ease-in-out hover:scale-105">О нас</Link>
          <Link href="/sales"  className="block text-center py-2 text-text hover:text-primary">Скидки и Рассрочка</Link>
          <Link href="/#contact" className="hover:text-primary transition-all duration-200 ease-in-out hover:scale-105">Контакты</Link>
          
        </div>
        <div className="flex space-x-4 mt-6 md:mt-0">
                  <a href="https://www.instagram.com/vasha_mebel.mogilev/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl ">
                    <FaInstagram />
                  </a>
                  
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-2xl">
                    <FaViber />
                  </a>
                </div>
                
        <Link 
          href="#contact" 
          className={`hidden md:block text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ${isScrolled ? 'bg-primary hover:bg-primary-dark' : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30'}`}
        >
          Связаться с нами
        </Link>
        
        {/* 3. Иконка-гамбургер для мобильных экранов */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* 4. Выпадающее мобильное меню */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-secondary pb-4`}>
        <Link href="/#services" onClick={closeMenu} className="block text-center py-2 text-text hover:text-primary">Услуги</Link>
        <Link href="/#projects" onClick={closeMenu} className="block text-center py-2 text-text hover:text-primary">Проекты</Link>
        <Link href="/#about" onClick={closeMenu} className="block text-center py-2 text-text hover:text-primary">О нас</Link>
        <Link href="/sales"  className="block text-center py-2 text-text hover:text-primary">Скидки и Рассрочка</Link>
        <Link href="/#contact" onClick={closeMenu} className="block text-center py-2 text-text hover:text-primary">Контакты</Link>
      </div>
    </header>
  );
}