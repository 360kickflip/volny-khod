import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useApp();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/catalog', label: 'Автопарк' },
    { path: '/tariffs', label: 'Тарифы' },
    { path: '/about', label: 'О нас' },
    { path: '/help', label: 'Помощь' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Вольный<span className="text-blue-600">Ход</span>
            </span>
          </Link>

          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path 
                    ? 'text-blue-600' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user.name}</span>
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
              >
                Войти
              </Link>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="block text-gray-700 dark:text-gray-300" 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          {user ? (
            <Link to="/profile" className="block text-blue-600" onClick={() => setIsOpen(false)}>
              Профиль ({user.name})
            </Link>
          ) : (
            <Link to="/auth" className="block bg-blue-600 text-white py-2 rounded-lg text-center" onClick={() => setIsOpen(false)}>
              Войти
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}