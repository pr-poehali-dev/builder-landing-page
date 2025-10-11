import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Building2',
    title: 'Жилищное строительство',
    description: 'Строительство частных домов, коттеджей и многоквартирных зданий с современными технологиями'
  },
  {
    icon: 'Factory',
    title: 'Промышленное строительство',
    description: 'Возведение производственных помещений, складов и логистических комплексов'
  },
  {
    icon: 'Store',
    title: 'Коммерческие объекты',
    description: 'Строительство торговых центров, офисных зданий и бизнес-парков'
  },
  {
    icon: 'Wrench',
    title: 'Реконструкция',
    description: 'Капитальный ремонт и модернизация существующих зданий и сооружений'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр строительных услуг для реализации проектов любой сложности
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
