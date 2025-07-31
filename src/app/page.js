'use client'
import Image from 'next/image';
import Link from 'next/link';
// Наши новые импорты
import ServiceCard from '@/components/ServiceCard';
import { FaBuilding, FaDraftingCompass, FaHardHat, FaTruck, FaScrewdriver, FaRulerCombined, FaPhoneAlt, FaInstagram, FaTelegramPlane, FaViber } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import { projectTypes } from '@/data/projects';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import { useModal } from '@/context/ModalContext'
import SectionSeparator from '@/components/SectionSeparator';




// Массив с данными об услугах
const services = [
  {
    icon: FaRulerCombined,
    title: "Профессиональный замер",
    description: "Наш специалист приедет в удобное время, чтобы точно измерить пространство и учесть все нюансы для идеальной интеграции мебели.",
  },
  {
    icon: FaBuilding, // Иконку можно поменять на FaComments или FaLightbulb
    title: "Консультация и идея",
    description: "Мы обсуждаем ваши потребности и предпочтения, чтобы понять, какой вы видите вашу будущую мебель.",
  },
  {
    icon: FaDraftingCompass,
    title: "Дизайн и планирование",
    description: "Наши дизайнеры создадут детализированный 3D-проект и план, чтобы вы увидели результат еще до начала производства.",
  },
  {
    icon: FaScrewdriver, // Иконку можно поменять на FaCog
    title: "Производство",
    description: "Опытные мастера на современном оборудовании воплотят проект в жизнь, используя только качественные материалы.",
  },
  {
    icon: FaTruck,
    title: "Доставка и Гарантия",
    description: "Мы бережно доставим вашу новую мебель, а наша официальная гарантия обеспечит ваше спокойствие на долгие годы.",
  },
  {
    icon: FaHardHat,
    title: "Профессиональная установка",
    description: "Наша команда монтажников быстро и аккуратно установит мебель, гарантируя ее идеальную работу и внешний вид.",
  },
];

export default function HomePage() {
  const { openModal } = useModal();
  return (
    <>
    
      {/* Hero Section (уже был) */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <Image src="https://picsum.photos/1920/1080" alt="Фон мебели" fill priority className="z-0 object-cover"/>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Мебель на заказ для вашего индивидуального интерьера</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Индивидуальный дизайн, качественные материалы, быстрые сроки.</p>
          <Link href="#projects" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg">
              Каталог
          </Link>
          <Link href="#contact" className="ml-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg">
              Связаться с нами
          </Link>
        </div>
      </section>
      <SectionSeparator />

      {/* === НАША НОВАЯ СЕКЦИЯ "УСЛУГИ" === */}
      <FadeIn>
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Заголовок секции */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Наши Услуги</h2>
            <p className="text-lg text-text-dark mt-2">От идеи до идеального воплощения в вашем доме.</p>
            <div className="mt-4 h-1 w-24 bg-primary mx-auto"></div> {/* Декоративная линия */}
          </div>

          {/* Сетка с карточками услуг */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="h-20 bg-gradient-to-b from-background via-primary/10 to-secondary"></div>
      </FadeIn>
        {/* === СЕКЦИЯ "О КОМПАНИИ" === */}
        <FadeIn>
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Левая колонка: Изображение */}
            <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden">
              <Image src="https://picsum.photos/800/600" alt="Офис компании Ваша Мебель" fill className="object-cover"/>
            </div>

            {/* Правая колонка: Текст */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                О нашей компании
              </h2>
              <p className="text-text-dark mb-6">
                Мы специализируемся на изготовлении качественной корпусной мебели на заказ уже более 10 лет. Наша команда опытных мастеров создает уникальные решения для каждого клиента, используя современные материалы и технологии.
              </p>
              {/* Ключевые показатели */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">10+</span>
                  <p className="text-text-dark">Лет на рынке</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">500+</span>
                  <p className="text-text-dark">Успешных проектов</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">98%</span>
                  <p className="text-text-dark">Довольных клиентов</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">5</span>
                  <p className="text-text-dark">Лет гарантии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>
      <SectionSeparator />
      <FadeIn>
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Заголовок секции */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Выполненные проекты</h2>
            <p className="text-lg text-text-dark mt-2">Наша работа говорит сама за себя.</p>
            <div className="mt-4 h-1 w-24 bg-primary mx-auto"></div>
          </div>

          {/* Сетка с проектами */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((type) => (
              <ProjectCard
                key={type.slug}
                // Передаем в карточку ссылку на динамическую страницу
                href={`/projects/${type.slug}`} 
                imageSrc={type.imageSrc}
                title={type.title}
                category={type.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      </FadeIn>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Не знаете, с чего начать?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и предварительный расчет стоимости вашего проекта. Наш дизайнер поможет воплотить ваши идеи в жизнь!
          </p>
          {/* !!! ГЛАВНОЕ ИЗМЕНЕНИЕ: Заменяем Link на Button и вызываем openModal !!! */}
          <button 
            onClick={() => openModal("Консультация с главной страницы")} // Можно передать любой текст, который будет отображаться в почте
            className="bg-white hover:bg-gray-200 text-primary-dark font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            Получить консультацию
          </button>
        </div>
      </section>
        {/* === СЕКЦИЯ "КОНТАКТЫ" === */}
      <FadeIn>
        <section id="contact" className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            {/* Заголовок секции */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text">Свяжитесь с нами</h2>
              <p className="text-lg text-text-dark mt-2">Мы всегда готовы ответить на ваши вопросы</p>
              <div className="mt-4 h-1 w-24 bg-primary mx-auto"></div>
            </div>

            {/* === НАШ НОВЫЙ БЛОК С КОНТАКТАМИ === */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
              {/* Телефон */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-text mb-2">Позвоните нам</h3>
                <Link href="tel:+375255122567" className="text-primary text-2xl font-bold hover:underline flex items-center justify-center gap-2">
                  <FaPhoneAlt />
                  <span>+375 (25) 512-25-67</span>
                </Link>
              </div>

              {/* Мессенджеры */}
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">Или напишите в мессенджер</h3>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.instagram.com/vasha_mebel.mogilev/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-4xl">
                    <FaInstagram />
                  </a>
                  <a href="tg://resolve?domain=имя_пользователя" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-4xl">
                    <FaTelegramPlane />
                  </a>
                  <a href="viber://chat?number=%2B375255122567" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-primary transition-colors text-4xl">
                    <FaViber />
                  </a>
                </div>
              </div>
              <div className="my-10 h-px bg-gray-700"></div> {/* Разделительная линия */}
            </div>
            
            {/* Форма */}
            <div className="max-w-2xl mx-auto">
                <p className="text-lg text-text-dark mt-2 text-center mb-8">Или оставьте заявку, и мы сами вам перезвоним!</p>
                <ContactForm />
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}