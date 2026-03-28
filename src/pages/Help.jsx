import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Бронирование',
      questions: [
        { q: 'Как забронировать автомобиль?', a: 'Выберите автомобиль в каталоге, нажмите "Забронировать", заполните форму и оплатите.' },
        { q: 'Можно ли отменить бронь?', a: 'Да, отмена возможна бесплатно за 24 часа до начала аренды.' },
        { q: 'Нужны ли права?', a: 'Да, необходимы права категории B со стажем от 2 лет.' },
      ]
    },
    {
      category: 'Оплата',
      questions: [
        { q: 'Какие способы оплаты есть?', a: 'Банковские карты, Apple Pay, Google Pay, наличные при получении.' },
        { q: 'Возвращается ли залог?', a: 'Да, залог возвращается в течение 3-5 рабочих дней после завершения аренды.' },
        { q: 'Есть ли скидки?', a: 'Да, при длительной аренде от 7 дней действует скидка 15%.' },
      ]
    },
    {
      category: 'Эксплуатация',
      questions: [
        { q: 'Что если случится ДТП?', a: 'Немедленно позвоните в поддержку. Все автомобили застрахованы по КАСКО.' },
        { q: 'Можно ли ездить в другой город?', a: 'Да, но необходимо предупредить поддержку заранее.' },
        { q: 'Кто заправляет авто?', a: 'Вы получаете авто с полным баком и должны вернуть его также полным.' },
      ]
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Помощь и поддержка</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ответы на популярные вопросы и контакты службы поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Phone, title: 'Телефон', value: '8 800 555-35-35' },
            { icon: Mail, title: 'Email', value: 'support@volniyhod.ru' },
            { icon: MessageCircle, title: 'Чат', value: 'Онлайн 24/7' },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl text-center">
              <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="font-bold text-gray-900 dark:text-white">{item.title}</div>
              <div className="text-blue-600">{item.value}</div>
            </div>
          ))}
        </div>

        {faqs.map((category, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.category}</h2>
            <div className="space-y-3">
              {category.questions.map((faq, j) => (
                <div key={j} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === `${i}-${j}` ? null : `${i}-${j}`)}
                    className="w-full p-4 text-left flex justify-between items-center font-medium text-gray-900 dark:text-white"
                  >
                    {faq.q}
                    {openIndex === `${i}-${j}` ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {openIndex === `${i}-${j}` && (
                    <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}