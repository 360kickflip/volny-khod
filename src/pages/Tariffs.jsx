import { Check, Zap, Car, Crown } from 'lucide-react';

export default function Tariffs() {
  const tariffs = [
    {
      name: 'Эконом',
      icon: Car,
      price: 'от 600 ₽',
      period: '/ сутки',
      features: [
        'Базовые автомобили',
        'Лимит 200 км/сутки',
        'Страховка включена',
        'Поддержка 24/7',
      ],
      popular: false,
    },
    {
      name: 'Комфорт',
      icon: Zap,
      price: 'от 1200 ₽',
      period: '/ сутки',
      features: [
        'Автомобили бизнес-класса',
        'Лимит 400 км/сутки',
        'Расширенная страховка',
        'Приоритетная поддержка',
        'Бесплатная доставка',
      ],
      popular: true,
    },
    {
      name: 'Премиум',
      icon: Crown,
      price: 'от 2500 ₽',
      period: '/ сутки',
      features: [
        'Премиум автомобили',
        'Безлимитный пробег',
        'Полная страховка',
        'Персональный менеджер',
        'VIP обслуживание',
        'Доступ к новым моделям',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Тарифные планы
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Выберите подходящий тариф для ваших нужд. Все цены включают страховку и обслуживание.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tariffs.map((tariff, i) => (
            <div 
              key={i} 
              className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg ${
                tariff.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {tariff.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Популярный
                </div>
              )}
              
              <div className="text-center mb-6">
                <tariff.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tariff.name}</h3>
                <div className="text-4xl font-bold text-blue-600">{tariff.price}</div>
                <div className="text-gray-500 dark:text-gray-400">{tariff.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tariff.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition ${
                tariff.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}>
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Что входит в стоимость аренды?', a: 'В стоимость включена страховка, обслуживание, мойка автомобиля и поддержка 24/7.' },
              { q: 'Можно ли продлить аренду?', a: 'Да, продление возможно через приложение или по телефону поддержки.' },
              { q: 'Есть ли залог?', a: 'Залог зависит от тарифа и составляет от 5000 до 50000 рублей.' },
              { q: 'Что если я верну авто позже?', a: 'Каждый час просрочки тарифицируется согласно вашему тарифному плану.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}