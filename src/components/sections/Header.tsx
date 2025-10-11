import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} className="text-accent" />
            <span className="text-2xl font-bold">СтройЭксперт</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="hover:text-accent transition-colors">О компании</a>
            <a href="#faq" className="hover:text-accent transition-colors">Вопросы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="bg-accent hover:bg-accent/90 text-white border-none">+7 (911) 932-77-88</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
