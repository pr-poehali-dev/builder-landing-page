const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/2993e249-969f-45e8-bcf0-babcf30161f2/files/777ba906-dbc5-4627-a55d-c6075abcb443.jpg" 
          alt="Строительство ангара" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;