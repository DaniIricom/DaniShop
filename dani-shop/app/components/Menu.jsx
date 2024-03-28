
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import CartIcon from './Carticon';

export default function Menu({cartItems}) {
  return (
    <Navbar className="mb-1" fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="/DaniShop_Logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Productos
        </Navbar.Link>
        <Navbar.Link href="#">
          <CartIcon itemCount={cartItems}/>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
