import React, { useState } from 'react';
import { Link} from 'react-router-dom';

export  function Header() {
const [dropdownOpen, setDropdownOpen] = useState(false);
return (
    <header className="bg-amber-900 text-white py-2 px-4 sticky top-0 z-50 shadow-md rounded-b-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold font-serif tracking-wider">
            Cousine
            </Link>
        </div>

        
        <nav className="hidden md:flex space-x-6 items-center">
            <ul className="flex space-x-6 items-center list-unstyled">
                <li>
            <Link to="/" className="hover:text-amber-300 transition-colors hover:underline">Inicio</Link>
                </li>
                <li>
            <Link to="/products" className="hover:text-amber-300 transition-colors hover:underline">Productos</Link>
                </li>
                <li>
            <Link to="/about-us" className="hover:text-amber-300 transition-colors hover:underline">Nosotros</Link>
                </li>
                <li>
            <Link to="/contact-us" className="hover:text-amber-300 transition-colors hover:underline">Contactos</Link>
                </li>
            </ul>            
        </nav>

        <div className="flex items-center space-x-2 relative p-2 rounded-full">
            <div className="flex items-center space-x-2 relative p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 16 16" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                    <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#ffffff"></path>
                    <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <ul className="flex items-center list-none m-0 p-0"> 
                <li 
                style={{ position: 'relative', cursor: 'pointer' }}
                className="hover:text-amber-300 transition-colors hover:underline "
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <span style={{ color: '#faf9f6' }}>Usuario</span>
                {dropdownOpen && (
                    <ul className="sub-menu" style={{ position: 'absolute', top: '100%', left: 0, background: '#7a493a', listStyle: 'none', padding: '0.5rem 1rem', minWidth: '140px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
                    <li style={{ margin: '0.5rem 0' }}><Link to="/login" style={{ color: '#faf9f6', textDecoration: 'none' }}>Iniciar sesión</Link></li>
                    <li style={{ margin: '0.5rem 0' }}><Link to="/register" style={{ color: '#faf9f6', textDecoration: 'none' }}>Registrarse</Link></li>
                    </ul>
                )}
                </li>
                </ul>
            </div>
{/*carrito*/}
            <Link to="/cart" className="relative p-2  rounded-full hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
            </Link>
            </div>
        </div>
    </header>

    );
}