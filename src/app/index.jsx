import React from 'react';

export default function Index() {
    return (
        <main className="site-main">
        <article className="post-2236 page type-page status-publish ast-article-single">
            <header className="entry-header ast-no-title ast-header-without-markup"></header>

            <div className="entry-content clear">
            
            <section className="relative flex items-center justify-center bg-cover bg-center">
                <div className="container mx-auto px-4 text-center z-10">
                <div className="max-w-xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">
                    El secreto de tu cocina, listo en tu despensa.
                    </h1>
                    <p className="text-lg text-white/90">
                    Regístrate para obtener un recetario exclusivo y un condimento de tu preferencia totalmente gratis.
                    </p>
                    <div className="pt-4">
                    <a 
                        href="#" 
                        className="inline-block bg-[#d95f3a] hover:bg-[#b87d1e] m-2 text-white font-medium px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        OBTENER AHORA
                    </a>
                    </div>
                </div>
                </div>
            </section>

            <section className="bg-[#e9bf6d] py-3 text-center overflow-hidden">
                <h2 className="text-xl font-serif text-[#3d1f1f] tracking-wide whitespace-nowrap animate-pulse">
                DELIVERY GRATIS &nbsp;&nbsp;&nbsp; DELIVERY GRATIS &nbsp;&nbsp;&nbsp; DELIVERY GRATIS&nbsp;&nbsp;&nbsp; DELIVERY GRATIS&nbsp;&nbsp;&nbsp; DELIVERY GRATIS &nbsp;&nbsp;&nbsp; DELIVERY GRATIS
                </h2>
            </section>

            <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h3 className="text-3xl font-serif text-[#3d1f1f] text-justify">Productos destacados</h3>
                    <p className="text-gray-600 mt-1">Especias listas para transformar la sazón de tus recetas diarias</p>
                </div>
                <div>
                    <a href="/products/" className="text-[#b87d1e] font-semibold hover:underline flex items-center gap-1">
                    Ver catálogo completo →
                    </a>
                </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: "cilantro", img: "WhatsApp-Image-2026-06-23-at-4.58.09-PM-168x300.png" },
                    { name: "salsa parrillera", img: "WhatsApp_Image_2026-05-05_at_1.22.52_PM-removebg-preview-123x300.png" },
                    { name: "aji dulce", img: "WhatsApp-Image-2026-06-23-at-4.58.11-PM-1-168x300.png" },
                    { name: "Cebollin", img: "Gemini_Generated_Image_uk4kgluk4kgluk4k-142x300.png" }
                ].map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center flex flex-col items-center">
                    <img src={`./Cousine_files/${product.img}`} alt={product.name} className="h-48 object-contain mb-4" />
                    <span className="capitalize font-medium text-[#3d1f1f]">{product.name}</span>
                    </div>
                ))}
                </div>
            </section>

            <section className="py-16 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-serif text-center mb-12 text-[#3d1f1f]">Nuestro negocio</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform">
                    <img src="./Cousine_files/pexels-photo-32281630-32281630-scaled.jpg" alt="100% Natural" className="rounded-lg h-48 w-full object-cover mb-4" />
                    <h3 className="text-xl font-bold text-[#3d1f1f] mb-2">100% Natural</h3>
                    <p className="text-gray-600">Sin aditivos, conservantes ni gluten.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform">
                    <img src="./Cousine_files/pexels-photo-8989470-8989470-scaled.jpg" alt="A tu Medida" className="rounded-lg h-48 w-full object-cover mb-4" />
                    <h3 className="text-xl font-bold text-[#3d1f1f] mb-2">A tu Medida</h3>
                    <p className="text-gray-600">Ventas al mayor para negocios y al detal con delivery express.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform">
                    <img src="./Cousine_files/pexels-photo-19227962-19227962-768x512.jpg" alt="Sello Local" className="rounded-lg h-48 w-full object-cover mb-4" />
                    <h3 className="text-xl font-bold text-[#3d1f1f] mb-2">Sello Local</h3>
                    <p className="text-gray-600">Hecho con orgullo e ingredientes 100% venezolanos.</p>
                    </div>

                </div>
                </div>
            </section>

            <section className="py-12 bg-[#7a493a] text-white text-center px-4">
                <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-serif leading-relaxed">
                    En COUSINE nos mueve la pasión por el sabor auténtico. Seleccionamos las mejores especias del campo venezolano para llevarlas a tu mesa con la practicidad que tu día a día exige.
                </h2>
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                
                <div className="text-center bg-[#faf9f6] p-8 rounded-2xl">
                    <img src="./Cousine_files/WhatsApp_Image_2026-05-05_at_1.22.52_PM-removebg-preview.png" alt="Combo a la Brasa" className="mx-auto h-64 object-contain mb-6" />
                    <h3 className="text-2xl font-bold text-[#3d1f1f]">COMBO A LA BRASA</h3>
                    <p className="text-gray-600 my-2">Sal Parrillera – Chimichurri – Ajo</p>
                    <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="line-through text-gray-400 text-lg">$10.0</span>
                    <span className="text-[#ff5733] text-3xl font-bold">$5.5</span>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-3xl font-serif text-[#3d1f1f]">EL TESORO DEL SABOR TE ESPERA</h3>
                    <p className="text-gray-600 leading-relaxed">
                    El Combo Parrillero A La Brasa lleva un sabor legendario a tus brasas. Una colección de mezclas audaces y ahumadas, creadas especialmente para los fanáticos listos para dominar el fuego y comandar la mesa de la tripulación.
                    </p>
                    <div>
                    <a 
                        href="#" 
                        className="inline-block bg-[#d95f3a] hover:bg-[#b87d1e] text-white font-medium px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-md"
                    >
                        COMPRAR EL COMBO
                    </a>
                    </div>
                </div>

                </div>
            </section>

            </div>
        </article>
        </main>
    );
}