'use client';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 1. Новое состояние для хранения названия проекта
  const [projectInterest, setProjectInterest] = useState(null);

  // 2. Обновляем openModal, чтобы она могла принимать данные
  const openModal = (interest = null) => {
    setProjectInterest(interest); // Сохраняем название проекта
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setProjectInterest(null); // Очищаем при закрытии
  };

  // 3. Передаем новое состояние и функцию в value
  return (
    <ModalContext.Provider value={{ isModalOpen, projectInterest, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}