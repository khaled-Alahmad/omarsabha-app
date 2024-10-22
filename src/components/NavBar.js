"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useSelectedLayoutSegment } from "next/navigation"; // For active route detection
import { useState } from "react";
import { AcmeLogo } from "./AcmeLogo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "About Us", path: "/about" },
    { name: "Service Requests", path: "/requests" },
    { name: "Vendors", path: "/vendors" },
  ];

  const isActive = (path) => {
    return activeSegment === null && path === "/" // Handle the root path
      ? true
      : activeSegment && path.includes(activeSegment); // Check for active segments
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="1300"
      classNames={{
        wrapper: "bg-white-50 xl:mx-12 mx-6 mt-5 h-auto navbar max-w-[100%]",
        base: "z-40 w-full h-auto items-center justify-center sticky top-0 backdrop-none",
      }}
      style={{ backdropFilter: "unset" }}
    >
      {/* Logo on the left */}
      <NavbarContent className="hidden lg:flex" justify="start">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      {/* Centered Nav Items for larger screens */}
      <NavbarContent className="hidden sm:flex flex-1 justify-center gap-6">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.path}
              className={`item-navbar ${
                isActive(item.path)
                  ? "active-link underline underline-offset-4" // Class for active link
                  : "text-black"
              }`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden justify-between w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Button and Dropdown on the right */}
      <NavbarContent justify="end" className="sm:flex">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                as={Link}
                className="bg-primary-300 text-primary-50 shadow"
                href="#"
                variant="flat"
              >
                Register
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem
                key="vendor"
                // className="dropdown-item" // Class for dropdown item
                href="/home"
              >
                As Vendor
              </DropdownItem>
              <DropdownItem
                key="client"
                // className="dropdown-item" // Class for dropdown item
                href="/about"
              >
                As Client
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Responsive Mobile Menu */}
      <NavbarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link
                className={`w-full ${isActive(item.path) ? "active-link" : ""}`}
                href={item.path}
                onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              as={Link}
              className="bg-primary-300 text-primary-50 shadow w-full"
              href="#"
            >
              Register
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
