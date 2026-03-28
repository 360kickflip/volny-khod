import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CARS } from '../data/cars';
import { Star, Fuel, Zap, Search, Filter } from 'lucide-react';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const filteredCars = CARS.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || car.type === filterType;
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Автопарк</h2>
        
        {/* Фильтры */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Поиск по марке..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
              />
            </div>
            
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
            >
              <option value="all">Все типы</option>
              <option value="electric">Электро</option>
              <option value="gasoline">Бензин</option>
            </select>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Найдено: {filteredCars.length} авто
              </span>
            </div>
          </div>
        </div>

        {/* Сетка автомобилей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-105 transition" />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> {car.rating}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{car.brand} {car.model}</h3>
                  <span className="text-blue-600 font-bold">{car.price} ₽</span>
                </div>
                <div className="flex gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                   <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                     {car.type === 'electric' ? <Zap size={12}/> : <Fuel size={12}/>}
                     {car.type === 'electric' ? 'Электро' : 'Бензин'}
                   </span>
                   <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{car.year}</span>
                </div>
                <Link to={`/car/${car.id}`} className="block w-full text-center bg-gray-900 dark:bg-gray-700 text-white py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition">
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Автомобили не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
}