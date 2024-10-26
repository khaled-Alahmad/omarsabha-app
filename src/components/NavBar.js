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
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
import { AcmeLogo } from "./AcmeLogo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  const menuItems = [
    { name: "Home", path: "/", title: "Home - InstaHandi" },
    { name: "Service", path: "/service", title: "Our Services - InstaHandi" },
    { name: "About Us", path: "/about", title: "About Us - InstaHandi" },
    {
      name: "Service Requests",
      path: "/requests",
      title: "Service Requests - InstaHandi",
    },
    { name: "Vendors", path: "/vendors", title: "Vendors - InstaHandi" },
  ];

  const isActive = (path) => {
    return activeSegment === null && path === "/"
      ? true
      : activeSegment && path.includes(activeSegment);
  };

  const handleClick = (title) => {
    document.title = title;
    setIsMenuOpen(false); // Close the menu if in mobile view
  };

  useEffect(() => {
    // Set default title based on the active route on initial load
    const activeItem = menuItems.find(
      (item) => item.path === `/${activeSegment || ""}`
    );
    if (activeItem) document.title = activeItem.title;
  }, [activeSegment]);

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
      <NavbarContent className="hidden lg:flex" justify="start">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex flex-1 justify-center gap-6">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.path}
              className={`item-navbar ${
                isActive(item.path)
                  ? "active-link underline underline-offset-4"
                  : "text-black"
              }`}
              aria-current={isActive(item.path) ? "page" : undefined}
              onClick={() => handleClick(item.title)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden justify-between w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

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
              <DropdownItem key="vendor" href="/home">
                As Vendor
              </DropdownItem>
              <DropdownItem key="client" href="/about">
                As Client
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link
                className={`w-full ${isActive(item.path) ? "active-link" : ""}`}
                href={item.path}
                onClick={() => handleClick(item.title)}
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
