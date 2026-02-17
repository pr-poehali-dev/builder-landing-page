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
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') as string;
                const phone = formData.get('phone') as string;
                const email = formData.get('email') as string;
                const message = formData.get('message') as string;

                let tgMessage = `Новая заявка с сайта:\n\n`;
                tgMessage += `👤 Имя: ${name}\n`;
                tgMessage += `📞 Телефон: ${phone}\n`;
                if (email) {
                  tgMessage += `📧 Email: ${email}\n`;
                }
                if (message) {
                  tgMessage += `\n💬 Сообщение:\n${message}`;
                }

                const tgUrl = `https://t.me/+79119327788?text=${encodeURIComponent(tgMessage)}`;
                window.open(tgUrl, '_blank');

                toast({
                  title: "Открываем Telegram...",
                  description: "Вы будете перенаправлены в Telegram для отправки заявки"
                });

                e.currentTarget.reset();
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
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">или</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-[#0088cc] hover:bg-[#006daa] text-white border-none"
                  onClick={() => {
                    window.open('https://t.me/+79119327788', '_blank');
                  }}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Быстрая связь через Telegram
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