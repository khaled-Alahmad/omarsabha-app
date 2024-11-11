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
  Badge,
} from "@nextui-org/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
import { AcmeLogo } from "./AcmeLogo";
import ServiceRequestClient from "./ServiceRequestClient";
import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaDollarSign,
  FaLifeRing,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa"; // Import icons from react-icons

import avatarImage from "@/assets/icons/avatar.png";
import notificationIcon from "@/assets/icons/notification.svg";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state
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

  const isActive = (path) =>
    (activeSegment === null && path === "/") || path === `/${activeSegment}`;

  const handleClick = (title, path) => {
    document.title = title;
    setIsMenuOpen(false);
    if (path === "/request-service" && !isAuthenticated) setIsModalOpen(true);
  };
  const handleRoute = (key) => {
    switch (key) {
      case "profile":
        router.push("/vendor/profile");
        break;
      case "proposals":
        router.push("/vendor/proposals");
        break;
      case "jobs":
        router.push("/vendor/jobs");
        break;
      case "transactions":
        router.push("/vendor/transactions");
        break;
      case "support":
        router.push("/vendor/support");
        break;
      case "logout":
        // Add logout functionality here
        console.log("Logging out...");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    // Check for auth status (replace with actual auth logic)
    const checkAuth = () => {
      // Example: setIsAuthenticated(!!localStorage.getItem("authToken"));
      setIsAuthenticated(true); // Set to true for testing
    };
    checkAuth();

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
                href={
                  item.path === "/request-service" && !isAuthenticated
                    ? "#"
                    : item.path
                }
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
          {isAuthenticated ? (
            <>
              <NavbarItem>
                <Dropdown>
                  <DropdownTrigger>
                    {/* <Badge
                      content="!"
                      color="error"
                      variant="flat"
                      shape="circle"
                    > */}
                    <img
                      src={notificationIcon.src}
                      alt="Notifications"
                      className="cursor-pointer w-6 h-6"
                    />
                    {/* </Badge> */}
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Notifications">
                    {[...Array(4)].map((_, i) => (
                      <DropdownItem key={i} className="notification-item">
                        <Link
                          href="/request-service/1"
                          className="notification-link"
                        >
                          New Services request posted. Place your Bid Now!
                          <span className="notification-time">
                            5 Minutes ago
                          </span>
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <Dropdown>
                  <DropdownTrigger>
                    <img
                      src={avatarImage.src}
                      alt="Profile"
                      className="rounded-full w-8 h-8 cursor-pointer"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Menu">
                    <DropdownItem key="profile" startContent={<FaUser />}>
                      <Link href="/vendor/profile">
                        <a>My Profile</a>
                      </Link>
                    </DropdownItem>

                    <DropdownItem key="proposals" startContent={<FaFileAlt />}>
                      <Link href="/vendor/proposals">
                        <a>My Proposals</a>
                      </Link>
                    </DropdownItem>

                    <DropdownItem key="jobs" startContent={<FaBriefcase />}>
                      <Link href="/vendor/jobs">
                        <a>My Jobs</a>
                      </Link>
                    </DropdownItem>

                    <DropdownItem
                      key="transactions"
                      startContent={<FaDollarSign />}
                    >
                      <Link href="/vendor/transactions">
                        <a>Transactions</a>
                      </Link>
                    </DropdownItem>

                    <DropdownItem
                      key="support"
                      startContent={<FaQuestionCircle />}
                    >
                      <Link href="/vendor/support">
                        <a>Help & Support</a>
                      </Link>
                    </DropdownItem>

                    <DropdownItem
                      key="logout"
                      color="error"
                      startContent={<FaSignOutAlt />}
                    >
                      <a>Log Out</a>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </>
          ) : (
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
                  <DropdownItem key="client" href="/auth/sign-up/client">
                    As Client
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.name}>
                <Link
                  href={
                    item.path === "/request-service" && !isAuthenticated
                      ? "#"
                      : item.path
                  }
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
            {!isAuthenticated && (
              <NavbarMenuItem>
                <Button
                  as={Link}
                  className="bg-primary-300 text-primary-50 shadow w-full mt-5"
                  href="#"
                >
                  Register
                </Button>
              </NavbarMenuItem>
            )}
          </div>
        </NavbarMenu>
      </Navbar>
      <ServiceRequestClient
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
