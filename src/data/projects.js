export const projectTypes = [
  {
    slug: "kitchens",
    title: "Кухни",
    imageSrc: "https://picsum.photos/600/400?random=1",
  },
  {
    slug: "wardrobes",
    title: "Шкафы",
    imageSrc: "https://picsum.photos/600/400?random=2",
  },
  {
    slug: "living-rooms",
    title: "Мебель для гостиной",
    imageSrc: "https://picsum.photos/600/400?random=3",
  },
  {
    slug: "dressers",
    title: "Комоды",
    imageSrc: "https://picsum.photos/600/400?random=4",
  },
  {
    slug: "hallways",
    title: "Прихожие",
    imageSrc: "https://picsum.photos/600/400?random=5",
  },
];


// Расширенные данные о конкретных выполненных проектах
export const projectsData = [
  // --- ШКАФЫ ---
  { 
    id: 1, 
    type: "wardrobes",
    slug: "modern-wardrobe-1", 
    name: "Шкаф-купе 'Модерн'", 
    mainImage: "https://picsum.photos/800/600?random=11",
    images: [
      "https://picsum.photos/1200/800?random=11",
      "https://picsum.photos/1200/800?random=21",
      "https://picsum.photos/1200/800?random=31",
    ],
    description: "Стильный и вместительный шкаф-купе в современном стиле. Идеально подходит для спален и прихожих, обеспечивая максимальную функциональность при минималистичном дизайне. Двери с плавным ходом и качественная фурнитура гарантируют долгий срок службы.",
    characteristics: [
      { label: "Материал корпуса", value: "ЛДСП Egger (Австрия)" },
      { label: "Фасады", value: "Зеркало с пескоструйным рисунком" },
      { label: "Профили дверей", value: "Алюминиевый профиль Senator" },
      { label: "Срок изготовления", value: "14-21 день" },
    ]
  },
  { 
    id: 2, 
    type: "wardrobes",
    slug: "classic-wardrobe-2", 
    name: "Встроенный шкаф 'Классика'", 
    mainImage: "https://picsum.photos/800/600?random=12",
    images: ["https://picsum.photos/1200/800?random=12"],
    description: "Элегантный встроенный шкаф, который идеально вписывается в интерьер, создавая ощущение единого пространства. Классический дизайн и премиальные материалы.",
    characteristics: [
      { label: "Материал корпуса", value: "МДФ крашеный" },
      { label: "Фасады", value: "Фрезерованный МДФ с патиной" },
      { label: "Срок изготовления", value: "21-30 дней" },
    ]
  },
  
  // --- КУХНИ ---
  { 
    id: 3, 
    type: "kitchens",
    slug: "loft-kitchen-3", 
    name: "Кухня в стиле Лофт", 
    mainImage: "https://picsum.photos/800/600?random=14",
    images: [
        "https://picsum.photos/1200/800?random=14",
        "https://picsum.photos/1200/800?random=24"
    ],
    description: "Современная и практичная кухня в стиле лофт. Сочетание текстуры дерева и металла создает уютную и в то же время индустриальную атмосферу. Продумана до мелочей для вашего удобства.",
    characteristics: [
      { label: "Материал корпуса", value: "ЛДСП Kronospan" },
      { label: "Фасады", value: "Пластик FENIX NTM" },
      { label: "Столешница", value: "Постформинг Egger" },
      { label: "Фурнитура", value: "Blum (Австрия)" },
    ]
  },
];