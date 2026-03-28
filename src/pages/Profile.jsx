import { useApp } from '../context/AppContext';
import { CARS } from '../data/cars';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function Profile() {
  const { bookings, user } = useApp();

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Личный кабинет</h1>
            <p className="text-gray-500">{user.name} • {user.phone}</p>
          </div>
          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold">
            {bookings.length} Активных поездок
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">История бронирований</h2>
        
        {bookings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500">У вас пока нет активных поездок</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map(booking => {
              const car = CARS.find(c => c.id === booking.carId);
              return (
                <div key={booking.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
                  <img src={car?.image} alt={booking.carName} className="w-32 h-20 object-cover rounded-lg" />
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{booking.carName}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <CheckCircle size={12} /> Активно
                      </span>
                    </div>
                    <div className="flex gap-6 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {booking.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {booking.days} дн.</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">{booking.totalPrice} ₽</div>
                    <div className="text-xs text-gray-400">Оплачено</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}