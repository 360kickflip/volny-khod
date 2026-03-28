import { useParams, useNavigate } from 'react-router-dom';
import { CARS } from '../data/cars';
import { useApp } from '../context/AppContext';
import { useState } from 'react';

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useApp();
  const car = CARS.find(c => c.id === parseInt(id));
  
  const [formData, setFormData] = useState({ days: 1, phone: '' });

  if (!car) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({
      carId: car.id,
      carName: `${car.brand} ${car.model}`,
      totalPrice: car.price * formData.days,
      days: formData.days,
      phone: formData.phone
    });
    navigate('/profile');
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Оформление аренды</h2>
        
        <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
          <img src={car.image} alt={car.model} className="w-20 h-20 rounded-lg object-cover" />
          <div>
            <h3 className="font-bold">{car.brand} {car.model}</h3>
            <p className="text-blue-600 font-bold">{car.price} ₽ / сутки</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
            <input 
              required
              type="tel" 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Срок аренды (дней)</label>
            <input 
              required
              type="number" 
              min="1" 
              value={formData.days}
              onChange={e => setFormData({...formData, days: parseInt(e.target.value)})}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
            />
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex justify-between mb-4 font-bold text-lg">
              <span>Итого:</span>
              <span>{car.price * formData.days} ₽</span>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
              Оплатить и забронировать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}