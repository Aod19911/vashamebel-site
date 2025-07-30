'use client';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Импортируем иконку для сообщения об успехе}

export default function ContactForm({ projectInterest = null }) {
  // 1. Создаем состояние для отслеживания статуса отправки
  // 'idle' - исходное, 'submitting' - отправка, 'success' - успешно, 'error' - ошибка
  const [submissionStatus, setSubmissionStatus] = useState('idle');

  // 2. Наша новая функция для отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку)
    setSubmissionStatus('submitting'); // Меняем статус на "отправка"

    const form = event.target;
    const data = new FormData(form);

    try {
      // Отправляем данные в Formspree в фоновом режиме
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json' // Важный заголовок, чтобы Formspree вернул JSON
        }
      });

      if (response.ok) {
        // Если все хорошо, меняем статус на "успешно"
        setSubmissionStatus('success');
        form.reset(); // Очищаем поля формы
      } else {
        // Если Formspree вернул ошибку
        setSubmissionStatus('error');
      }
    } catch (error) {
      // Если произошла сетевая ошибка
      setSubmissionStatus('error');
    }
  };

  // 3. Если форма успешно отправлена, показываем красивое сообщение
  if (submissionStatus === 'success') {
    return (
      <div className="text-center p-8">
        <FaCheckCircle className="text-primary text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text mb-2">Заявка отправлена!</h2>
        <p className="text-text-dark">Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  // 4. Если произошла ошибка
  if (submissionStatus === 'error') {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Что-то пошло не так...</h2>
        <p className="text-text-dark">Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.</p>
      </div>
    );
  }

  // 5. В противном случае (статус 'idle' или 'submitting'), показываем саму форму
  return (
    <div>
      <h2 className="text-3xl font-bold text-text mb-2 text-center">Обсудим ваш проект?</h2>
      <p className="text-text-dark mb-8 text-center">Оставьте заявку, и мы свяжемся с вами для консультации.</p>
      
      {/* Теперь мы используем onSubmit для вызова нашей функции */}
      <form action="https://formspree.io/f/xvgqqgjp" method="POST" onSubmit={handleSubmit} className="space-y-4">
        {/* !!! НЕ ЗАБУДЬТЕ ВАШ ID FORMSPREE !!! */}
        
        {projectInterest && (
          <input type="hidden" name="Интересующий проект" value={projectInterest} />
        )}
        
        <div>
          <label htmlFor="modal-name" className="sr-only">Ваше имя</label>
          <input type="text" id="modal-name" name="name" className="w-full p-3 rounded-lg bg-background border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition placeholder:text-text-dark" placeholder="Ваше имя" required />
        </div>
        <div>
          <label htmlFor="modal-tel" className="sr-only">Ваш телефон</label>
          <input type="tel" id="modal-tel" name="tel" className="w-full p-3 rounded-lg bg-background border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition placeholder:text-text-dark" placeholder="Ваш телефон" required />
        </div>
        <div className="text-center">
          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg disabled:opacity-50"
            disabled={submissionStatus === 'submitting'} // Блокируем кнопку во время отправки
          >
            {submissionStatus === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </div>
      </form>
    </div>
  );
}