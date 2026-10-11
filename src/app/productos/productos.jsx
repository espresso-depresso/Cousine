import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function Products() {
    const [products] = useState([
        { id: 1, name: 'Plato Gourmet Cousine', price: '450,00', image: 'placeholder.jpg' },
        { id: 2, name: 'Especialidad de la Casa', price: '680,00', image: 'placeholder.jpg' },
        { id: 3, name: 'Menú Ejecutivo', price: '320,00', image: 'placeholder.jpg' }
    ]);

    return (

        <div className="" >
        <main className="" >
            <header className="">
            <h1 className="" >Productos</h1>
            </header>
            
            <div className="" >
            {products.map((product) => (
                <div key={product.id} className="" >
                <img src={product.image} alt={product.name}  />
                <h2 >{product.name}</h2>
                <p >Bs. {product.price}</p>
                <button onClick={() => addToCart(product)} >Añadir al carrito</button>
                </div>
            ))}
            </div>
        </main>
        </div>
    );
}