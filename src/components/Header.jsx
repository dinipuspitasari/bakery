import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import  ButtonPrimary  from "./ButtonPrimary";

export function Header() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 bg-yellow-700 px-5 py-3 shadow md:px-32"
    >
      <NavbarBrand href="/">
        <span className="self-center text-2xl font-bold tracking-wide whitespace-nowrap text-white">
          BAKERY
        </span>
      </NavbarBrand>

      {/* Burger menu di mobile */}
      <NavbarToggle />

      {/* Menu collapse */}
      <NavbarCollapse>
        <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-10">
          <NavbarLink href="/" className="text-white">
            Home
          </NavbarLink>
          <NavbarLink href="/menu" className="text-white">
            Menu
          </NavbarLink>
          <NavbarLink href="/about" className="text-white">
            About
          </NavbarLink>
          <NavbarLink href="/contact" className="text-white">
            Contact
          </NavbarLink>
          <ButtonPrimary>Order Now</ButtonPrimary>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
