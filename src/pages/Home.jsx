import { Link } from 'react-router-dom';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Твой город. <br/> 
          <span className="text-blue-600">Твой вольный ход.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Сервис аренды автомобилей, который дает свободу выбора. 
          Премиум и эконом класс с доставкой на дом.
        </p>
        
        <div className="bg-white p-4 rounded-2xl shadow-xl max-w-2xl mx-auto flex flex-col md:flex-row gap-4 border border-gray-100">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Где забрать?" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 outline-none" />
          </div>
          <div className="flex-1 relative">
            <Calendar className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
            <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 outline-none" />
          </div>
          <Link to="/catalog" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
            Найти авто <ChevronRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Быстрая подача", desc: "Доставим авто за 30 минут" },
            { title: "Полная страховка", desc: "КАСКО включено в цену" },
            { title: "Чистые авто", desc: "Химчистка после каждого клиента" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}