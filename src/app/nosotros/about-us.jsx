import React from 'react';

    export default function AboutUs() {
    return (
        <div className="site-content ast-container" style={{ padding: '4rem 1rem', color: '#3d1f1f', maxWidth: '800px', margin: '0 auto' }}>
        <header className="entry-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h1 className="entry-title" style={{ fontFamily: 'Abril Fatface, display', fontSize: '3rem' }}>Sobre Nosotros</h1>
        </header>

        <section id="quienes" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Abril Fatface, display', fontSize: '2rem', color: '#b87d1e', marginBottom: '1rem' }}>¿Quiénes somos?</h2>
            <p style={{ lineHeight: '1.6' }}>Cousine es un espacio culinario dedicado a ofrecer experiencias gastronómicas memorables, combinando tradición y modernidad en cada uno de nuestros platillos.</p>
        </section>

        <section id="mision" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Abril Fatface, display', fontSize: '2rem', color: '#b87d1e', marginBottom: '1rem' }}>Misión</h2>
            <p style={{ lineHeight: '1.6' }}>Brindar calidad excepcional y un servicio impecable, superando las expectativas de nuestros clientes a través de la excelencia culinaria.</p>
        </section>

        <section id="vision">
            <h2 style={{ fontFamily: 'Abril Fatface, display', fontSize: '2rem', color: '#b87d1e', marginBottom: '1rem' }}>Visión</h2>
            <p style={{ lineHeight: '1.6' }}>Consolidarnos como el restaurante referente en innovación gastronómica y satisfacción total en la región.</p>
        </section>
        </div>
    );
}