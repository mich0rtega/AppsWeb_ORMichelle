import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgound from '@/Assets/img/slide.png'; 
import PushToyBunny from '@/Assets/img/Anglo Dutch Pools and Toys _ Quality Toys for Kids, Pool & Spa Supply.jpg'
import PushPenguin from '@/Assets/img/Aurora World Pompom Penguin - 7__ Pompom Dino, Green (1).jpg'
import './StorePage.css'; 

const StorePage = () => {
  const navigate = useNavigate();


  const goToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="store-container h-screen flex flex-col">
      {/* Barra de navegación */}
      <header className="encabezado bg-teal-500">
        <nav>
          <ul className="flex justify-center">
            <li><a href="/" className="text-white px-4 py-2">Inicio</a></li>
            <li><a href="#productos" className="text-white px-4 py-2">Productos</a></li>
            <li><a href="#contacto" className="text-white px-4 py-2">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Slider de imágenes */}
      <div className="slider-container">
        <img src={backgound} alt="Imagen de fondo" className="slider-image" />
        
      </div>

      {/* Sección principal */}
      <section id="Inicio" className="flex flex-col items-center bg-white py-12">
        <h1 className="text-4xl font-bold mb-6">Teddy Store</h1>
        <p className="text-center mb-6">Esta página fue creada para practicar los conocimientos básicos sobre React, buscando aprender más y prepararnos para integradora.</p>
        <button
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600"
          onClick={goToLogin}
        >
          Iniciar Sesión
        </button>
      </section>

      {/* Sección de productos */}
      <section id="productos" className="productos-section bg-gray-100 py-12">
        <h2 className="text-2xl text-center font-bold mb-6">Productos</h2>
        <div className="productos-gallery flex justify-center space-x-8">
          <div className="productos-card">
            <img src={PushToyBunny} alt="Push Toy Bunny" className="w-full" />
            <h3 className="text-xl mt-2">Push Toy Bunny</h3>
            <p className="text-gray-700">Gray Bunny</p>
            <a href="assets/vista-producto.html?id_producto=1" className="text-blue-500">Comprar</a>
          </div>
          <div className="productos-card">
            <img src={PushPenguin} alt="Push Penguin" className="w-full" />
            <h3 className="text-xl mt-2">Push Penguin</h3>
            <p className="text-gray-700">Green penguin with a dress of dinosaur</p>
            <a href="assets/vista-producto.html?id_producto=2" className="text-blue-500">Comprar</a>
          </div>
          {/* Agregar más productos aquí */}
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contacto" className="contact-section py-12 bg-teal-100">
        <h2 className="text-2xl text-center font-bold mb-6">Contáctame</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <label htmlFor="name" className="block mb-2">Nombre</label>
          <input type="text" id="name" name="name" required className="w-full p-3 mb-4 border rounded" />
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" required className="w-full p-3 mb-4 border rounded" />
          <label htmlFor="message" className="block mb-2">Mensaje</label>
          <textarea id="message" name="message" rows="4" className="w-full p-3 mb-4 border rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default StorePage;
