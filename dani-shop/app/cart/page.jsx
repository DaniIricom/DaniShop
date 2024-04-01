"use client";
import Menu from "../components/MenuComponent";
import { useState, useCallback } from "react";
import Card from "../components/ProductCard";
import { Table } from "flowbite-react";
import Image from "next/image";
export default function Page() {
  // Recuperamos el carrito de sesion
  const [cartItems, setCartItems] = useState(
    sessionStorage.CarritoDaniShop
      ? JSON.parse(sessionStorage.CarritoDaniShop)
      : []
  );

  const handleRemoveItem = useCallback(
    (id) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      sessionStorage.removeItem("CarritoDaniShop");
      sessionStorage.setItem(
        "CarritoDaniShop",
        JSON.stringify(cartItems.filter((item) => item.id !== id))
      );
    },
    [cartItems]
  );

  return (
    <>
      <Menu
        cartItemCount={cartItems.reduce((acc, item) => acc + item.uds, 0)}
      />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center mt-10">
        Detalle de compra
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Articulo
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" colSpan={3} className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt={item.title}
                      loading="lazy"
                    />
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.uds}</td>
                  <td className="px-6 py-4">{item.price}€</td>

                  <td className="px-6 py-4">
                    <button onClick={() => {}}>+</button>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => {}}>-</button>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
