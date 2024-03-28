'use client'
import Menu from './components/Menu'
import Carrusel from './components/Carrusel'
import Card from './components/ProductCard'
import { useState, useEffect } from 'react';
import { getProducts } from "./services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get all products from API
    getProducts().then((response) => setProducts(response.data));
  }, []);

  const addCartItemHandler = ({id, title, price, img})=>{

    const itemCarrito = {
      id,
      title,
      price,
      img
    }
    // Guardamos los ids de los productos que añadimos al carrito
     setCartItems(cartItems.concat(itemCarrito))
     // guardamos en sesión los ids de los productos del carrito
     sessionStorage.setItem("CarritoDaniShop",JSON.stringify(cartItems))
  }

  return (
    <>
    <Menu cartItems={cartItems.length} />
    <Carrusel />

    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center mt-10'>Productos</h1>
    {/* Productos */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
      {products.map((product) => (
        <div key={product.id}>
          <Card id={product.id} title={product.title} price={product.price} img={product.image} addCartItemHandler={addCartItemHandler}/>
        </div>
      ))}
    </div>
  </>
  );
}
