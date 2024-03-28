
"use client";

import { Button, Card } from "flowbite-react";

export default function ProductCard({ id, title, price, img, addCartItemHandler }) {
  return (
    <Card
      className="w-72 max-w-xs h-full flex flex-col" // Establece la altura máxima y flex para ajustar el contenido
      imgAlt={title}
      imgSrc={img}
    >
      <div className="flex-grow"> {/* Utiliza flex-grow para que este div ocupe el espacio restante */}
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        {/* Stars */}
        <div className="mb-2 mt-1 flex items-center">
          {/* Aquí van las estrellas */}
        </div>
        {/* Stars */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {price}€
          </span>
          <Button
            className="rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => addCartItemHandler({id, title, price, img})}
          >
            Añadir
          </Button>
        </div>
      </div>
    </Card>
  );
}
