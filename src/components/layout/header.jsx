export  function Header() {
return (
    <header className="bg-amber-900 text-white py-4 px-4 sticky top-0 z-50 shadow-md rounded-b-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <a href="/" className="text-2xl font-bold font-serif tracking-wider">
            Cousine
            </a>
        </div>

        
        <nav className="hidden md:flex space-x-6 items-center">
            <a href="/" className="hover:text-amber-300 transition-colors hover:underline">Inicio</a>
            <a href="/products" className="hover:text-amber-300 transition-colors hover:underline">Productos</a>
            <a href="/about-us" className="hover:text-amber-300 transition-colors hover:underline">Nosotros</a>
            <a href="/contact-us" className="hover:text-amber-300 transition-colors hover:underline">Contactos</a>
            
          {/* Zona de Usuario / Acceso */}
            
        </nav>

        {/* Icono de Carrito */}
        <div className="flex items-center p-1">
            <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-amber-300">
                <span>Usuario</span>
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#ffffff"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#ffffff"></path> </g></svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-amber-900 border rounded shadow-lg hidden group-hover:block">
                <a href="/login" className="block px-4 py-2 hover:bg-amber-600 text-sm">Iniciar sesión</a>
                <a href="/register" className="block px-4 py-2 hover:bg-amber-600 text-sm">Registrarse</a>
            </div>
            </div>

            <a href="/cart" className="relative p-2  rounded-full hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
            </a>
            </div>
        </div>
    </header>
    );
}