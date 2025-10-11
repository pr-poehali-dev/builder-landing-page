import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="animate-on-scroll">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  phone: formData.get('phone'),
                  email: formData.get('email'),
                  message: formData.get('message')
                };

                try {
                  const response = await fetch('https://functions.poehali.dev/73c3d7f9-562c-48ab-bb16-c0ec9fde98c1', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  });

                  if (response.ok) {
                    toast({
                      title: "Заявка отправлена!",
                      description: "Наш менеджер свяжется с вами в ближайшее время"
                    });
                    e.currentTarget.reset();
                  } else {
                    toast({
                      title: "Ошибка",
                      description: "Не удалось отправить заявку. Попробуйте позже.",
                      variant: "destructive"
                    });
                  }
                } catch (error) {
                  toast({
                    title: "Ошибка",
                    description: "Не удалось отправить заявку. Проверьте подключение к интернету.",
                    variant: "destructive"
                  });
                }
              }}>
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" name="name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="example@mail.ru" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" name="message" placeholder="Опишите ваш проект..." rows={4} />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="animate-on-scroll">
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
  );
};

export default ContactSection;
