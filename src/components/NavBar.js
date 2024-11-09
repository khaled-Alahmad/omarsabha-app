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
import ServiceRequestClient from "./ServiceRequestClient";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const activeSegment = useSelectedLayoutSegment();

  const menuItems = [
    { name: "Home", path: "/", title: "Home - InstaHandi" },
    {
      name: "Our services",
      path: "/service",
      title: "Our Services - InstaHandi",
    },
    { name: "About Us", path: "/about", title: "About Us - InstaHandi" },
    {
      name: "Requests open for bidding",
      path: "/request-service",
      title: "Requests open for bidding - InstaHandi",
    },
    { name: "Vendors", path: "/vendors", title: "Vendors - InstaHandi" },
  ];

  const isActive = (path) => {
    // Check if the activeSegment is null and path is the root
    if (activeSegment === null && path === "/") {
      return true;
    }

    // Check if the activeSegment is the same as the path
    if (path === `/${activeSegment}`) {
      return true;
    }

    // Check if the path starts with the activeSegment for sub-paths
    return activeSegment && path.startsWith(`/${activeSegment}`);
  };
  const handleClick = (title, path) => {
    document.title = title;
    setIsMenuOpen(false); // Close the menu if in mobile view
    if (path === "/request-service") {
      setIsModalOpen(true); // Open the modal when clicking "Service Requests"
    }
  };

  useEffect(() => {
    // Set default title based on the active route on initial load
    const activeItem = menuItems.find(
      (item) => item.path === `/${activeSegment || ""}`
    );
    if (activeItem) document.title = activeItem.title;
  }, [activeSegment]);

  return (
    <>
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
                href={item.path === "/request-service" ? "#" : item.path}
                className={`item-navbar ${
                  isActive(item.path)
                    ? "active-link underline underline-offset-4"
                    : "text-black"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
                onClick={() => handleClick(item.title, item.path)}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent
          className="sm:hidden justify-between w-full"
          style={{ height: "36px" }}
        >
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
                <DropdownItem key="vendor" href="/auth/sign-up/vendor">
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
                  href={item.path === "/request-service" ? "#" : item.path}
                  className={`item-navbar mt-4 ${
                    isActive(item.path)
                      ? "active-link underline underline-offset-4"
                      : "text-white-50"
                  }`}
                  onClick={() => handleClick(item.title, item.path)}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <Button
                as={Link}
                className="bg-primary-300 text-primary-50 shadow w-full mt-5"
                href="#"
              >
                Register
              </Button>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>
      <ServiceRequestClient
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen} // Pass the state handler to manage the modal
      />
    </>
  );
}
