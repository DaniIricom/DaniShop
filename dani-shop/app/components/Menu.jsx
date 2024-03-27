
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function Menu() {
  return (
    <Navbar className="mb-1" fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="/DaniShop_Logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Inicio
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Productos
        </Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
