import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о строительстве
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-on-scroll">
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
  );
};

export default FAQSection;
