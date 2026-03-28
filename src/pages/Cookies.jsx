import { Cookie, ChevronDown } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Cookie Policy
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Информация об использовании файлов cookie
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Что такое cookie?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта. 
              Они помогают сайту запоминать информацию о вас и ваших предпочтениях.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Какие cookie мы используем?
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 dark:text-white">Необходимые</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Требуются для работы сайта (авторизация, корзина, безопасность)
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-gray-900 dark:text-white">Аналитические</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Помогают нам понять, как пользователи взаимодействуют с сайтом
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold text-gray-900 dark:text-white">Маркетинговые</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Используются для показа релевантной рекламы
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Как управлять cookie?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Вы можете настроить использование cookie в параметрах вашего браузера:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Google Chrome: Настройки → Конфиденциальность → Cookie</li>
              <li>Mozilla Firefox: Настройки → Приватность → Cookie</li>
              <li>Safari: Настройки → Конфиденциальность → Cookie</li>
              <li>Edge: Настройки → Файлы cookie</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Контакты
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              По вопросам использования cookie обращайтесь на email: privacy@volniyhod.ru
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}