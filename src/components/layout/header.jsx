import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Inicio" },
        { to: "/products", label: "Productos" },
        { to: "/about-us", label: "Nosotros" },
        { to: "/contact-us", label: "Contactos" },
    ];

    return (
        <header className="bg-amber-900 text-white py-3 px-4 sticky top-0 z-50 shadow-md rounded-b-xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-2xl font-bold font-serif tracking-wider">
                        Cousine
                    </Link>
                </div>

                <nav className="hidden md:flex space-x-6 items-center">
                    <ul className="flex space-x-6 items-center list-none m-0 p-0">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="hover:text-amber-300 transition-colors hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
{/* ususario*/}                
            <div className="flex items-center space-x-3">
                    
                    <div 
                        className="relative p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer flex items-center space-x-2"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <svg viewBox="0 0 16 16" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#ffffff"></path>
                            <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <span className="text-[#faf9f6] hidden sm:inline">Usuario</span>
                        
                        {dropdownOpen && (
                            <ul className="absolute top-full right-0 mt-1 bg-[#7a493a] list-none p-2 rounded-md min-w-[140px] shadow-lg">
                                <li className="my-1">
                                    <Link to="/login" className="text-[#faf9f6] hover:text-amber-300 block py-1">Iniciar sesión</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="/register" className="text-[#faf9f6] hover:text-amber-300 block py-1">Registrarse</Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/*carrito*/}
                    <Link to="/cart" className="relative p-2 rounded-full hover:bg-white/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
                    </Link>

                    {/*boton movil */}
                    <button 
                        aria-label="Menu" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* menu moviles */}
            {mobileMenuOpen && (
                <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
                    <ul className="flex flex-col space-y-3 items-center list-none m-0 p-0">
                        {navLinks.map((link) => (
                            <li key={link.to} className="border-b-2 border-white/10 w-full text-center">
                                <Link 
                                    to={link.to} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="hover:text-amber-300 transition-colors text-lg hover:underline"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}