'use client'
import Menu from './components/Menu'
import Carrusel from './components/Carrusel'
import Card from './components/ProductCard'
import { useState, useEffect } from 'react';
import { getProducts } from "./services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get all products from API
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <>
    <Menu />
    <Carrusel />

    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center mt-10'>Productos</h1>
    {/* Productos */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
      {products.map((product) => (
        <div key={product.id}>
          <Card title={product.title} price={product.price} img={product.image} />
        </div>
      ))}
    </div>
  </>
  );
}
