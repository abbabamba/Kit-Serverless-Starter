'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiHome, FiFileText, FiLogIn, FiSun, FiMoon } from 'react-icons/fi';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedDarkMode);
    applyDarkMode(storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    applyDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const applyDarkMode = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return [isDarkMode, toggleDarkMode];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className={`text-2xl font-bold ${scrolled ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-700 dark:text-indigo-300'} transition-colors duration-300`}>
                FSS Kit
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <NavLink href="/" icon={FiHome} text="Home" scrolled={scrolled} isActive={pathname === '/'} />
                <NavLink href="/about" icon={FiFileText} text="About" scrolled={scrolled} isActive={pathname === '/about'} />
                <NavLink href="/posts" icon={FiFileText} text="Posts" scrolled={scrolled} isActive={pathname === '/posts'} />
                <NavLink href="/auth" icon={FiLogIn} text="Login" scrolled={scrolled} isActive={pathname === '/auth'} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${scrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' : 'text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/20'} transition-colors duration-300`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' : 'text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/20'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" icon={FiHome} text="Home" />
            <MobileNavLink href="/about" icon={FiFileText} text="About" />
            <MobileNavLink href="/posts" icon={FiFileText} text="Posts" />
            <MobileNavLink href="/auth" icon={FiLogIn} text="Login" />
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
              >
                {isDarkMode ? <FiSun size={18} className="mr-3" /> : <FiMoon size={18} className="mr-3" />}
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, icon: Icon, text, scrolled, isActive }) {
  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 
        ${isActive 
          ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200' 
          : scrolled 
            ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' 
            : 'text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-800/20'
        }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon size={18} className="mr-2" />
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ href, icon: Icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      <Icon size={18} className="mr-3" />
      <span>{text}</span>
    </Link>
  );
}