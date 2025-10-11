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

                let whatsappMessage = `Новая заявка с сайта:%0A%0A`;
                whatsappMessage += `👤 Имя: ${encodeURIComponent(name)}%0A`;
                whatsappMessage += `📞 Телефон: ${encodeURIComponent(phone)}%0A`;
                if (email) {
                  whatsappMessage += `📧 Email: ${encodeURIComponent(email)}%0A`;
                }
                if (message) {
                  whatsappMessage += `%0A💬 Сообщение:%0A${encodeURIComponent(message)}`;
                }

                const whatsappUrl = `https://wa.me/79119327788?text=${whatsappMessage}`;
                window.open(whatsappUrl, '_blank');

                toast({
                  title: "Открываем WhatsApp...",
                  description: "Вы будете перенаправлены в WhatsApp для отправки заявки"
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
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white border-none"
                  onClick={() => {
                    const whatsappUrl = 'https://wa.me/79119327788?text=Здравствуйте! Хочу получить консультацию';
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Быстрая связь через WhatsApp
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