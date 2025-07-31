'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Мы проверяем, есть ли в текущем URL якорь ('#')
    // window.location.hash возвращает часть URL, начиная с #
    // Если якоря нет, то он возвращает пустую строку.
    if (window.location.hash) {
      // Если якорь есть, мы ничего не делаем,
      // позволяя браузеру самому прокрутить до него.
      return;
    }

    // Если якоря нет, значит, это обычный переход между страницами,
    // и мы прокручиваем окно в самый верх.
    window.scrollTo(0, 0);

  }, [pathname]); // По-прежнему зависим от смены pathname

  return null;
}