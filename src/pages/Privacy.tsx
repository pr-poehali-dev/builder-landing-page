import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться на главную
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Политика конфиденциальности</h1>
          <p className="text-muted-foreground">Дата последнего обновления: 17 февраля 2026 г.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных физических лиц, пользующихся сайтом ООО «РУКОС»
              (ИНН: 7814827748, далее — «Компания»).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Заполняя формы на сайте и предоставляя свои персональные данные, Пользователь
              выражает согласие с условиями настоящей Политики конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Какие данные мы собираем</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания может собирать следующие персональные данные:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Содержание сообщений, направленных через форму обратной связи</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Цели обработки данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Персональные данные обрабатываются в следующих целях:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Обработка входящих заявок и обращений</li>
              <li>Связь с Пользователем по вопросам оказания услуг</li>
              <li>Предоставление консультаций по строительным услугам</li>
              <li>Улучшение качества обслуживания</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Защита персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания принимает необходимые организационные и технические меры для защиты
              персональных данных Пользователя от неправомерного или случайного доступа,
              уничтожения, изменения, блокирования, копирования, распространения, а также
              от иных неправомерных действий третьих лиц.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground leading-relaxed">
              Компания не передаёт персональные данные третьим лицам, за исключением случаев,
              предусмотренных законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Сроки хранения данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Персональные данные хранятся в течение срока, необходимого для достижения целей
              их обработки, либо до момента отзыва согласия Пользователем.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Права пользователя</h2>
            <p className="text-muted-foreground leading-relaxed">
              Пользователь имеет право:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Получить информацию об обработке своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Для реализации указанных прав необходимо обратиться по адресу электронной
              почты: <a href="mailto:info@stroyexpert.ru" className="text-accent underline">info@stroyexpert.ru</a> или
              по телефону: <a href="tel:+79119327788" className="text-accent underline">+7 (911) 932-77-88</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Контактная информация</h2>
            <p className="text-muted-foreground leading-relaxed">
              По всем вопросам, связанным с обработкой персональных данных, вы можете
              обратиться к нам:
            </p>
            <ul className="list-none pl-0 text-muted-foreground space-y-1">
              <li>ООО «РУКОС»</li>
              <li>ИНН: 7814827748, КПП: 781401001</li>
              <li>Юридический адрес: шоссе Фермское, д. 32, кв./оф. кв. 400, г. Санкт-Петербург</li>
              <li></li>
              <li></li>
              <li>Телефон: +7 (911) 932-77-88</li>
              <li>Email: info@stroyexpert.ru</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;