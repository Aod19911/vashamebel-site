import Link from 'next/link';
import Image from 'next/image';
import { projectsData, projectTypes } from '@/data/projects'; // Импортируем наши данные

export default async function ProjectCategoryPage({ params }) {
  const { slug } = await params; // Получаем slug из URL (например, 'wardrobes')

  // Находим информацию о текущей категории (чтобы получить заголовок)
  const currentType = projectTypes.find(type => type.slug === slug);

  // Фильтруем все проекты, чтобы остались только те, что относятся к этой категории
  const filteredProjects = projectsData.filter(project => project.type === slug);

  // Если такой категории нет, можно показать сообщение об ошибке
  if (!currentType) {
    return (
      <div className="bg-background text-center py-20">
        <h1 className="text-4xl text-white">Категория не найдена</h1>
        <Link href="/" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-6 rounded">
          Вернуться на главную
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text">{currentType.title}</h1>
          <p className="text-lg text-text-dark mt-2">Примеры наших работ в этой категории</p>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Сетка с проектами этой категории */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link key={project.id} href={`/projects/${slug}/${project.slug}`}>
              <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full h-64">
                {/* В mainImage теперь основное фото для карточки */}
                <Image
                  src={project.mainImage} 
                  alt={project.name}
                  fill
                  className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text">{project.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка "Назад" */}
        <div className="text-center mt-16">
          <Link href="/#projects" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg">
            Все категории
          </Link>
        </div>
      </div>
    </div>
  );
}