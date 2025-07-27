export default function ServiceCard({ icon, title, description }) {
  // Эта строка позволяет нам передавать иконку как компонент
  const IconComponent = icon;

  return (
    <div className="bg-secondary p-8 rounded-lg shadow-lg hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
      <div className="text-primary text-5xl mb-5">
        <IconComponent />
      </div>
      <h3 className="text-xl font-bold mb-3 text-text">{title}</h3>
      <p className="text-text-dark flex-grow">{description}</p>
    </div>
  );
}