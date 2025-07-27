import Link from "next/link";

export default function SalesPage() {
  return (
    // Добавляем фоновый цвет всей секции
    <div className="bg-background"> 
      <div className="container mx-auto px-6 py-20">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text">Скидки и Рассрочка</h1>
          <p className="text-lg text-text-dark mt-2">Мы делаем качественную мебель доступной</p>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Контент */}
        <div className="space-y-12">
          {/* Блок "Скидки" */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg md:flex md:items-center md:gap-8">
            <div className="md:w-1/3 text-center mb-6 md:mb-0">
               <span className="text-8xl text-primary font-bold">15%</span>
               <p className="text-text-dark">Скидка для новоселов</p>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-primary mb-4">Сезонные скидки и акции</h2>
              <p className="text-text-dark">
                Следите за нашими акциями! Мы регулярно предлагаем скидки на популярные категории мебели,
                а также специальные предложения для новоселов и постоянных клиентов. Уточняйте у менеджера
                действующие акции на момент заказа.
              </p>
            </div>
          </div>

          {/* Блок "Рассрочка" */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg md:flex md:items-center md:gap-8">
             <div className="md:w-1/3 text-center mb-6 md:mb-0">
               <span className="text-8xl text-primary font-bold">0%</span>
               <p className="text-text-dark">Переплат</p>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-primary mb-4">Беспроцентная рассрочка</h2>
              <p className="text-text-dark">
                Мебель мечты — уже сегодня! Мы предлагаем удобную программу рассрочки от банков-партнеров
                без переплат и скрытых комиссий. Разделите стоимость на несколько месяцев и наслаждайтесь
                новым интерьером без удара по бюджету.
              </p>
            </div>
          </div>
        </div>

        {/* Кнопка "Назад на главную" */}
        <div className="text-center mt-16">
          <Link href="/" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">Вернуться на главную</Link>
        </div>
      </div>
    </div>
  );
}