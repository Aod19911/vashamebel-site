'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }} // Строка удалена
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}