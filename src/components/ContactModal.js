'use client';
import { useModal } from '@/context/ModalContext';
import Modal from './Modal';
import ContactForm from './ContactForm';

export default function ContactModal() {
  // Получаем projectInterest из контекста
  const { isModalOpen, closeModal, projectInterest } = useModal();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {/* И передаем его как пропс в форму */}
      <ContactForm projectInterest={projectInterest} />
    </Modal>
  );
}