
import Link from "next/link";
import CartIcon from './Carticon';
import Image from "next/image";
import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function MenuComponent({ cartItemCount = 0 }) {

  return (
    <Navbar>
      <NavbarLink href="/"  >
        <Image src="/DaniShop_Logo.png" className="mr-3 h-6 sm:h-9" alt="DaniShop logo" width={100} height={100} />
      </NavbarLink>
      <NavbarLink href="/cart">
        <CartIcon itemCount={cartItemCount} />
      </NavbarLink>
    </Navbar >
  )

}
