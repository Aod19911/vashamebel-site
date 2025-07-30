'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Закрытие по клику на фон
        >
          <motion.div
            className="bg-secondary rounded-lg shadow-xl p-8 relative w-full max-w-lg mx-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие по клику на само окно
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-dark hover:text-primary transition-colors"
            >
              <FaTimes size={24} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}