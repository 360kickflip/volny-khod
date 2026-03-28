import { FileCheck, ChevronDown } from 'lucide-react';

export default function Offer() {
  const sections = [
    {
      title: "1. Общие положения",
      content: `1.1. Настоящая публичная оферта (далее — Оферта) является официальным предложением сервиса «Вольный Ход» (далее — Исполнитель) заключить договор на оказание услуг аренды автомобилей.

1.2. Оферта адресована неопределенному кругу лиц (далее — Заказчик).

1.3. Акцептом Оферты считается факт оформления и оплаты заказа на сайте.`
    },
    {
      title: "2. Предмет оферты",
      content: `2.1. Исполнитель обязуется предоставить Заказчику во временное владение и пользование автомобиль.

2.2. Заказчик обязуется оплатить услуги и вернуть автомобиль в установленный срок.

2.3. Технические характеристики автомобилей указаны на сайте.

2.4. Исполнитель вправе заменять автомобиль на аналогичный по характеристикам.`
    },
    {
      title: "3. Стоимость услуг",
      content: `3.1. Стоимость аренды указана на сайте и включает:
• Предоставление автомобиля
• Страховку по программе КАСКО
• Техническое обслуживание
• Мойку автомобиля

3.2. Дополнительные услуги оплачиваются отдельно.

3.3. Цены указаны в рублях и включают НДС.`
    },
    {
      title: "4. Порядок расчетов",
      content: `4.1. Оплата производится 100% предоплатой.

4.2. Залог блокируется на платежном средстве Заказчика.

4.3. Возврат средств при отмене осуществляется согласно правилам Сервиса.

4.4. Все расчеты проводятся в безналичной форме.`
    },
    {
      title: "5. Срок действия оферты",
      content: `5.1. Оферта вступает в силу с момента публикации на сайте.

5.2. Оферта действует бессрочно до момента отзыва Исполнителем.

5.3. Исполнитель вправе изменить условия Оферты в одностороннем порядке.

5.4. Новая редакция публикуется на сайте за 7 дней до вступления в силу.`
    },
    {
      title: "6. Реквизиты исполнителя",
      content: `ООО «Вольный Ход»
ИНН: 7701234567
ОГРН: 1234567890123
Юридический адрес: 125009, г. Москва, ул. Тверская, д. 1
Телефон: 8 800 555-35-35
Email: legal@volniyhod.ru
Банковские реквизиты предоставляются по запросу.`
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Публичная оферта
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Договор на оказание услуг аренды автомобилей
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 dark:text-white mb-4">Содержание</h2>
          <ul className="space-y-2">
            {sections.map((section, i) => (
              <li key={i}>
                <a href={`#offer-${i}`} className="text-blue-600 hover:underline text-sm">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} id={`offer-${i}`} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ChevronDown className="h-5 w-5 text-blue-600" />
                {section.title}
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3 whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <strong>Примечание:</strong> Данная оферта не является публичной офертой в смысле статьи 437 ГК РФ и носит информационный характер.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Для заключения договора необходимо оформить заказ на сайте и получить подтверждение от Исполнителя.
          </p>
        </div>
      </div>
    </div>
  );
}