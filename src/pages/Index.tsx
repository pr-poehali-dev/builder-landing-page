
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

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

  const advantages = [
    { icon: 'Award', title: '15+ лет опыта', description: 'Успешно реализовано более 300 проектов' },
    { icon: 'Users', title: 'Команда профессионалов', description: 'Квалифицированные инженеры и строители' },
    { icon: 'CheckCircle2', title: 'Гарантия качества', description: 'Полная гарантия на все виды работ' },
    { icon: 'Clock', title: 'Соблюдение сроков', description: 'Четкое выполнение графика строительства' }
  ];



  return (
    <div className="min-h-screen bg-background">
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

      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-32">
        <div className="container mx-auto px-4">
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
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных услуг для реализации проектов любой сложности
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground">Почему выбирают нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
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



      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                СтройЭксперт — ведущая строительная компания с 15-летним опытом работы на рынке. 
                Мы специализируемся на строительстве объектов любой сложности и предоставляем 
                полный цикл услуг от проектирования до сдачи объекта в эксплуатацию.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда состоит из высококвалифицированных специалистов с богатым опытом 
                реализации проектов различного масштаба. Мы используем современные технологии 
                и материалы, что гарантирует высокое качество и долговечность наших объектов.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Сотрудников</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary to-primary rounded-lg p-12 flex items-center justify-center">
              <Icon name="HardHat" size={200} className="text-white/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о строительстве
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                  Преимущества сотрудничества с нами
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>15+ лет успешного опыта в строительной отрасли</li>
                    <li>Собственные производственные мощности и техника</li>
                    <li>Команда квалифицированных специалистов</li>
                    <li>Полное соблюдение сроков и договорных обязательств</li>
                    <li>Гарантия качества на все виды работ</li>
                    <li>Конкурентные цены без скрытых платежей</li>
                    <li>Комплексный подход: от проектирования до сдачи объекта</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                  Что влияет на окончательную стоимость строительства?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-3">На итоговую стоимость строительства влияют следующие факторы:</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Площадь и этажность здания</li>
                    <li>Тип объекта (жилой, коммерческий, промышленный)</li>
                    <li>Выбор материалов и комплектующих</li>
                    <li>Сложность архитектурных решений</li>
                    <li>Особенности грунта и необходимость фундаментных работ</li>
                    <li>Инженерные коммуникации и оборудование</li>
                    <li>Удаленность объекта и логистика материалов</li>
                    <li>Сезонность работ</li>
                  </ul>
                  <p className="mt-3">Для точного расчета свяжитесь с нашими специалистами.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                  Как происходит строительство ангара «под ключ»?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <div className="space-y-3">
                    <p><strong>1. Проектирование:</strong> Разработка технической документации с учетом ваших требований</p>
                    <p><strong>2. Подготовка площадки:</strong> Геодезические работы, планировка территории</p>
                    <p><strong>3. Фундамент:</strong> Устройство надежного основания согласно проекту</p>
                    <p><strong>4. Монтаж каркаса:</strong> Сборка металлоконструкций на объекте</p>
                    <p><strong>5. Кровля и ограждение:</strong> Монтаж кровельных и стеновых панелей</p>
                    <p><strong>6. Инженерные системы:</strong> Прокладка коммуникаций, электрики, вентиляции</p>
                    <p><strong>7. Внутренняя отделка:</strong> Завершающие работы по отделке помещений</p>
                    <p><strong>8. Сдача объекта:</strong> Передача документации и ввод в эксплуатацию</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                  Какие преимущества зданий на основе металлоконструкций?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong>Скорость строительства:</strong> Монтаж в 2-3 раза быстрее традиционного</li>
                    <li><strong>Экономичность:</strong> Снижение стоимости до 30% по сравнению с кирпичом/бетоном</li>
                    <li><strong>Прочность и долговечность:</strong> Срок службы более 50 лет</li>
                    <li><strong>Сейсмостойкость:</strong> Высокая устойчивость к нагрузкам</li>
                    <li><strong>Свободная планировка:</strong> Большие пролеты без внутренних опор</li>
                    <li><strong>Круглогодичное строительство:</strong> Монтаж при любой погоде</li>
                    <li><strong>Экологичность:</strong> Возможность повторного использования конструкций</li>
                    <li><strong>Легкий вес:</strong> Снижение нагрузки на фундамент</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                  Какие меры безопасности принимаются при строительстве здания из металлоконструкций?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Строгое соблюдение требований охраны труда и техники безопасности</li>
                    <li>Все работники проходят обязательный инструктаж и имеют допуски</li>
                    <li>Использование сертифицированных СИЗ (средства индивидуальной защиты)</li>
                    <li>Применение современного безопасного оборудования</li>
                    <li>Регулярный контроль качества монтажных работ</li>
                    <li>Ограждение строительной площадки и контроль доступа</li>
                    <li>Организация безопасного складирования материалов</li>
                    <li>Противопожарные мероприятия на всех этапах строительства</li>
                    <li>Назначение ответственных лиц за безопасность на объекте</li>
                    <li>Страхование строительно-монтажных рисков</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Заявка отправлена!",
                    description: "Наш менеджер свяжется с вами в ближайшее время"
                  });
                }}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Опишите ваш проект..." rows={4} required />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (911) 932-77-88</p>
                      <p className="text-muted-foreground"></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@stroyexpert.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Строителей, д. 10, офис 301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб: 10:00 - 15:00</p>
                      <p className="text-muted-foreground">Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={28} className="text-accent" />
                <span className="text-xl font-bold">СтройЭксперт</span>
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
                <li>+7 (495) 123-45-67</li>
                <li>info@stroyexpert.ru</li>
                <li>г. Москва, ул. Строителей, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 СтройЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;