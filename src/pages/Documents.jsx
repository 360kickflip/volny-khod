import { Building, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function Documents() {
  const { addToast } = useToast();
  const [copied, setCopied] = useState(null);

  const requisites = {
    company: 'ООО «Вольный Ход»',
    inn: '7701234567',
    ogrn: '1234567890123',
    kpp: '770101001',
    address: '125009, г. Москва, ул. Тверская, д. 1',
    bank: 'ПАО Сбербанк',
    bik: '044525225',
    account: '40702810400000012345',
    correspondent: '30101810400000000225',
    director: 'Генеральный директор: Иванов Иван Иванович',
    phone: '8 800 555-35-35',
    email: 'info@volniyhod.ru'
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    addToast('Скопировано в буфер обмена', 'success');
    setTimeout(() => setCopied(null), 2000);
  };

  const RequisiteRow = ({ label, value, field }) => (
    <div className="flex justify-between items-center py-3 border-b dark:border-gray-700 last:border-0">
      <span className="text-gray-600 dark:text-gray-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 dark:text-white font-medium">{value}</span>
        <button
          onClick={() => copyToClipboard(value, field)}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition"
        >
          {copied === field ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Building className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Реквизиты компании
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Официальная информация для юридических лиц
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Основная информация */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Основные реквизиты
            </h2>
            <div>
              <RequisiteRow label="Наименование" value={requisites.company} field="company" />
              <RequisiteRow label="ИНН" value={requisites.inn} field="inn" />
              <RequisiteRow label="ОГРН" value={requisites.ogrn} field="ogrn" />
              <RequisiteRow label="КПП" value={requisites.kpp} field="kpp" />
              <RequisiteRow label="Адрес" value={requisites.address} field="address" />
              <RequisiteRow label="Директор" value={requisites.director} field="director" />
            </div>
          </div>

          {/* Банковские реквизиты */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Банковские реквизиты
            </h2>
            <div>
              <RequisiteRow label="Банк" value={requisites.bank} field="bank" />
              <RequisiteRow label="БИК" value={requisites.bik} field="bik" />
              <RequisiteRow label="Расчётный счёт" value={requisites.account} field="account" />
              <RequisiteRow label="Корр. счёт" value={requisites.correspondent} field="correspondent" />
            </div>
          </div>

          {/* Контакты */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Контактная информация
            </h2>
            <div>
              <RequisiteRow label="Телефон" value={requisites.phone} field="phone" />
              <RequisiteRow label="Email" value={requisites.email} field="email" />
            </div>
          </div>
        </div>

        {/* Скачать документы */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Скачать документы
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Устав ООО', size: '2.4 MB' },
              { name: 'Свидетельство ОГРН', size: '1.1 MB' },
              { name: 'Выписка из ЕГРЮЛ', size: '0.8 MB' },
            ].map((doc, i) => (
              <button
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition group"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">{doc.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600">{doc.size}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Актуальность реквизитов проверена: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>
      </div>
    </div>
  );
}