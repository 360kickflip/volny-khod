import { Car, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Car, value: '500+', label: 'Автомобилей' },
    { icon: Users, value: '50K+', label: 'Клиентов' },
    { icon: Award, value: '4.9', label: 'Рейтинг' },
    { icon: Clock, value: '24/7', label: 'Поддержка' },
  ];

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            О компании <span className="text-blue-600">Вольный Ход</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Мы создаём будущее автомобильного каршеринга, делая аренду доступной, 
            удобной и безопасной для каждого клиента.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center">
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Наша миссия</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Предоставлять людям свободу передвижения без необходимости владеть автомобилем. 
              Мы верим, что доступ к транспорту должен быть простым, прозрачным и выгодным.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              С 2020 года мы развиваем сервис, который уже помог более 50 000 клиентов 
              совершить миллионы поездок по всей стране.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/about.jpg" 
              alt="О нас" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Современный автопарк', desc: 'Все автомобили не старше 3 лет с полным обслуживанием' },
              { title: 'Прозрачные цены', desc: 'Никаких скрытых платежей. Всё включено в стоимость' },
              { title: 'Круглосуточная поддержка', desc: 'Мы всегда на связи и готовы помочь в любой ситуации' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}