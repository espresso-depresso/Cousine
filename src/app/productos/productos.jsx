import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function Products() {
    const [products] = useState([
        { id: 1, name: 'Cilantro', price: '450,00', image: 'placeholder.jpg' },
        { id: 2, name: 'Perejil', price: '680,00', image: 'placeholder.jpg' },
        { id: 3, name: 'Sal de cebolla', price: '320,00', image: 'placeholder.jpg' }
    ]);

    return (

        <div className="" >
        <main className="py-12 px-4 md:px-12 max-w-7xl mx-auto" >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" >
            {products.map((product) => (
                <div key={product.id} className="shadow-sm text-center flex flex-col items-center rounded-3xl bg-amber-50 border-1 border-amber-950/50 transform hover:scale-105 transition-transform" >
                <img src={product.image} alt={product.name}  />
                <h2 >{product.name}</h2>
                <p >Bs. {product.price}</p>
                <button className="inline-block m-2 bg-[#d95f3a] hover:bg-[#b87d1e] text-white font-small px-2 py-2 rounded-full transition-all transform hover:scale-105 shadow-md" onClick={() => addToCart(product)} >Añadir al carrito</button>
                </div>
            ))}
            </div>
        </main>
        </div>
    );
}