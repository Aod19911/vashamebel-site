export default function SectionSeparator() {
  return (
    <div 
      // h-20 - задаем высоту разделителя
      // bg-gradient-to-b - направление градиента сверху вниз
      // from-secondary - начинается с цвета фона верхней секции
      // via-primary/20 - проходит через наш бирюзовый с 20% прозрачностью (это и создает "свечение")
      // to-background - заканчивается цветом фона нижней секции
      className="h-20 bg-gradient-to-b from-secondary via-primary/20 to-background"
    >
    </div>
  );
}