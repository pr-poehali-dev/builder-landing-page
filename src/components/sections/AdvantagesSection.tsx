import Icon from '@/components/ui/icon';

const advantages = [
  { icon: 'Award', title: '15+ лет опыта', description: 'Успешно реализовано более 300 проектов' },
  { icon: 'Users', title: 'Команда профессионалов', description: 'Квалифицированные инженеры и строители' },
  { icon: 'CheckCircle2', title: 'Гарантия качества', description: 'Полная гарантия на все виды работ' },
  { icon: 'Clock', title: 'Соблюдение сроков', description: 'Четкое выполнение графика строительства' }
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-lg text-muted-foreground">Почему выбирают нас</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={advantage.icon} size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
