'use client'
import Carrusel from './components/Carrusel'
import Card from './components/ProductCard'
import { useState, useEffect } from 'react';
import { getProducts } from "./services/productService";
import Menu from './components/MenuComponent';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(sessionStorage.CarritoDaniShop ? JSON.parse(sessionStorage.CarritoDaniShop) : []);

  useEffect(() => {
    // Get all products from API
    getProducts().then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    // Guardamos los ids de los productos del carrito en sesión
    sessionStorage.setItem("CarritoDaniShop", JSON.stringify(cartItems));
  }, [cartItems]);

  const addCartItemHandler = ({ id, title, price, img }) => {

    // Comprobamos si ya existe ese articulo en el carrito para aumentar sus unidades
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      // Si el artículo ya existe en el carrito, incrementamos sus unidades
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].uds += 1;
      setCartItems(updatedCartItems);
    }
    else {
      // Si no existe, lo agregamos
      setCartItems(cartItems.concat({ id, title, price, img, uds: 1 }))
    }

  }

  return (
    <>
      <Menu cartItemCount={cartItems.reduce((acc, item) => acc + item.uds, 0)} />
      <Carrusel />

      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center mt-10'>Productos</h1>
      {/* Productos */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <div key={product.id}>
            <Card id={product.id} title={product.title} price={product.price} img={product.image} addCartItemHandler={addCartItemHandler} />
          </div>
        ))}
      </div>
    </>
  );
}
