import Icon from '@/components/ui/icon';

const IndustrialObjectsSection = () => {
  const objects = [
    {
      title: 'Складские комплексы',
      description: 'Современные складские помещения с системами хранения, погрузочно-разгрузочными зонами и логистической инфраструктурой',
      image: 'https://cdn.poehali.dev/projects/2993e249-969f-45e8-bcf0-babcf30161f2/files/2bc5f2c9-c0d9-4b73-b1c9-b2bab467283b.jpg',
      features: ['Автоматизированные системы', 'Температурный контроль', 'Рампы и доки']
    },
    {
      title: 'Производственные цеха',
      description: 'Промышленные здания для размещения производственных линий с учетом всех технологических требований',
      image: 'https://cdn.poehali.dev/projects/2993e249-969f-45e8-bcf0-babcf30161f2/files/db7195e2-e412-4a7a-bfd2-68b128506cb1.jpg',
      features: ['Мостовые краны', 'Усиленные полы', 'Системы вентиляции']
    },
    {
      title: 'Логистические центры',
      description: 'Многофункциональные объекты для хранения, сортировки и распределения товаров с развитой транспортной инфраструктурой',
      image: 'https://cdn.poehali.dev/projects/2993e249-969f-45e8-bcf0-babcf30161f2/files/fec5d866-075e-435b-ba77-3a5c1ddab557.jpg',
      features: ['Кросс-докинг', 'Системы сортировки', 'Парковки для фур']
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Промышленные объекты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Строим современные промышленные сооружения любой сложности с учетом специфики вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objects.map((object, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={object.image} 
                  alt={object.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{object.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {object.description}
                </p>
                
                <div className="space-y-2">
                  {object.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 shadow-lg animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Icon name="Factory" size={40} className="mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Промышленных объектов</div>
            </div>
            <div>
              <Icon name="Warehouse" size={40} className="mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-2">200,000м²</div>
              <div className="text-sm text-muted-foreground">Построенных площадей</div>
            </div>
            <div>
              <Icon name="Truck" size={40} className="mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Логистических центров</div>
            </div>
            <div>
              <Icon name="Award" size={40} className="mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Сданы в срок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialObjectsSection;
