export function Footer() {
    return (
        <footer className="bg-amber-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
            <h4 className="text-xl font-serif mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-amber-50/80">
                <li><a href="/about-us/#quienes" className="hover:text-white">Quiénes somos?</a></li>
                <li><a href="/about-us/#mision" className="hover:text-white">Misión</a></li>
                <li><a href="/about-us/#vision" className="hover:text-white">Visión</a></li>
            </ul>
            </div>

            <div>
            <h4 className="text-xl font-serif mb-4">Enlaces de interés</h4>
            <ul className="space-y-2 text-sm text-amber-50/80">
                <li><a href="/privacy-policy" className="hover:text-white">Política de privacidad</a></li>
                <li><a href="/privacy-policy/#terminos" className="hover:text-white">Términos y condiciones</a></li>
                <li><a href="/privacy-policy/#envios" className="hover:text-white">Política de envíos</a></li>
            </ul>
            </div>

            <div className="space-y-4">
            <h4 className="text-xl font-serif">Soporte</h4>
            <ul className="space-y-2 text-sm text-amber-50/80">
                <li><a href="/support" className="hover:text-white">Atención al cliente</a></li>
                <li><a href="/support/#faq" className="hover:text-white">FAQ</a></li>
            </ul>
            </div>
        </div>

        <div className="border-t border-white/10 py-6 px-6 text-sm text-white/90 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <a href="/" className="text-2xl font-bold font-serif tracking-wider">
            Cousine
            </a>
            <p>Copyright © 2026 Cousine</p>
        </div>
        </footer>
    );
}