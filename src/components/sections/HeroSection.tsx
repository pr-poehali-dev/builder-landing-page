import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section className="relative text-white py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/2993e249-969f-45e8-bcf0-babcf30161f2/files/520ce731-355b-44dd-9433-0eb1da34f905.jpg" 
          alt="Строительная площадка" 
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-primary/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Строим с заботой о качестве
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Профессиональное строительство жилых, коммерческих и промышленных объектов. 
            Полный цикл работ от проектирования до сдачи под ключ.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
