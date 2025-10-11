import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

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

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="hidden sm:flex bg-accent hover:bg-accent/90 text-white border-none"
            >
              +7 (911) 932-77-88
            </Button>
            
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="hover:text-accent transition-colors py-2"
                onClick={handleNavClick}
              >
                Услуги
              </a>
              <a 
                href="#about" 
                className="hover:text-accent transition-colors py-2"
                onClick={handleNavClick}
              >
                О компании
              </a>
              <a 
                href="#faq" 
                className="hover:text-accent transition-colors py-2"
                onClick={handleNavClick}
              >
                Вопросы
              </a>
              <a 
                href="#contact" 
                className="hover:text-accent transition-colors py-2"
                onClick={handleNavClick}
              >
                Контакты
              </a>
              <a 
                href="tel:+79119327788" 
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-md transition-colors sm:hidden"
              >
                <Icon name="Phone" size={18} />
                +7 (911) 932-77-88
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
