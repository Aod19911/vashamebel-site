'use client';
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { useModal } from '@/context/ModalContext';




export default function ProjectDetailPage({ params }) {

const { openModal } = useModal();
  const resolvedParams = use(params);
  const { projectSlug } = resolvedParams;
    
  // Находим нужный проект по его slug
  const project = projectsData.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="bg-background text-center py-20">
        <h1 className="text-4xl text-white">Проект не найден</h1>
        <Link href="/#projects" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-6 rounded">
          Вернуться к проектам
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Хлебные крошки */}
        <div className="mb-8 text-sm text-text-dark">
          <Link href="/" className="hover:text-primary">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/#projects" className="hover:text-primary">Проекты</Link>
          <span className="mx-2">/</span>
          <span className="text-text">{project.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Левая колонка - Галерея */}
          <div className="lg:col-span-3">
            <div className="relative w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.images[0]} alt={project.name} fill className="object-cover" />
            </div>
            {/* Сюда можно будет добавить миниатюры других изображений */}
          </div>

          {/* Правая колонка - Информация */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">{project.name}</h1>
            <p className="text-text-dark mb-8">{project.description}</p>

            <h2 className="text-2xl font-bold text-text mb-4">Характеристики</h2>
            <table className="w-full text-left">
              <tbody>
                {project.characteristics.map((char, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 pr-4 text-text-dark">{char.label}</td>
                    <td className="py-2 font-semibold text-text">{char.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

                
            
            <div className="mt-10">
                
              <button onClick={() => openModal(project.name)} className="w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
                    Заказать расчет
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}