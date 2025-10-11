import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Building2" size={28} className="text-accent" />
              <span className="text-xl font-bold">РУКОС</span>
            </div>
            <p className="text-sm text-gray-300">
              Профессиональное строительство с 2008 года
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-accent transition-colors">Жилищное строительство</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Промышленное строительство</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Коммерческие объекты</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Реконструкция</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-accent transition-colors">О компании</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+7 (911) 932-77-88</li>
              <li>info@stroyexpert.ru</li>
              <li>г. Москва, ул. Строителей, д. 10</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 РУКОС. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;