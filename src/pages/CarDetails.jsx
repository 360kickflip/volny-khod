import { useParams, Link } from 'react-router-dom';
import { CARS } from '../data/cars';
import { ChevronLeft, Star, Fuel, Zap, Check } from 'lucide-react';

export default function CarDetails() {
  const { id } = useParams();
  const car = CARS.find(c => c.id === parseInt(id));

  if (!car) return <div className="pt-32 text-center">Авто не найдено</div>;

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/catalog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Назад в каталог
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.brand} {car.model}</h1>
                <p className="text-gray-500 text-lg">{car.year} год выпуска</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-bold text-blue-600">{car.price} ₽</span>
                <span className="text-sm text-gray-400">в сутки</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-bold">
                <Star className="h-4 w-4 fill-yellow-500" /> {car.rating}
              </div>
              <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                {car.type === 'electric' ? <Zap size={16}/> : <Fuel size={16}/>}
                {car.type === 'electric' ? 'Электро' : 'Бензин'}
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{car.description}</p>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Особенности</h3>
              <div className="grid grid-cols-2 gap-3">
                {car.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-green-500" /> {feat}
                  </div>
                ))}
              </div>
            </div>

            <Link to={`/booking/${car.id}`} className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-center">
              Забронировать сейчас
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}