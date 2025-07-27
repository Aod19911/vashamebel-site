import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ imageSrc, title, category, href = "#" }) {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg">
      <Link href={href}>
        {/* Изображение по-прежнему будет увеличиваться при наведении */}
        <Image
          src={imageSrc}
          alt={`Проект: ${title}`}
          width={500}
          height={400}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-all duration-500">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-primary text-sm">{category}</p>
        </div>
      </Link>
    </div>
  );
}