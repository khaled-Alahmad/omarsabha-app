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
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AcmeLogo } from "./AcmeLogo";
import ServiceRequestClient from "./ServiceRequestClient";
import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaDollarSign,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import avatarImage from "@/assets/icons/avatar.png";
import notificationIcon from "@/assets/icons/notification.svg";

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state
  const currentPath = usePathname(); // Get the current path with usePathname
  console.log("Current Path:", currentPath);

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

  const handleClick = (title, path) => {
    document.title = title;
    setIsMenuOpen(false);
    if (path === "/request-service" && !isAuthenticated) setIsModalOpen(true);
  };

  const handleRoute = (key) => {
    const routes = {
      profile: "/vendor/profile",
      proposals: "/vendor/proposals",
      jobs: "/vendor/jobs",
      transactions: "/vendor/transactions",
      support: "/vendor/support",
    };

    if (key === "logout") {
      console.log("Logging out...");
      // Implement logout functionality here
    } else if (routes[key]) {
      router.push(routes[key]);
    }
  };

  useEffect(() => {
    // Simulate auth check (replace with actual auth logic)
    const checkAuth = () => {
      setIsAuthenticated(true); // Set to true for testing
    };
    checkAuth();

    const activeItem = menuItems.find((item) => item.path === currentPath);
    if (activeItem) document.title = activeItem.title;
  }, [currentPath]);

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
                  currentPath === item.path
                    ? "bg-green-200 text-white"
                    : "text-black"
                }`}
                aria-current={currentPath === item.path ? "page" : undefined}
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
                    <img
                      src={notificationIcon.src}
                      alt="Notifications"
                      className="cursor-pointer w-6 h-6"
                    />
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
                  <DropdownMenu aria-label="User Menu" onAction={handleRoute}>
                    <DropdownItem
                      key="profile"
                      startContent={<FaUser />}
                      className={
                        currentPath === "/vendor/profile" ? "bg-green-100" : ""
                      }
                    >
                      My Profile
                    </DropdownItem>

                    <DropdownItem
                      key="proposals"
                      startContent={<FaFileAlt />}
                      className={
                        currentPath === "/vendor/proposals"
                          ? "bg-green-100 active"
                          : ""
                      }
                    >
                      My Proposals
                    </DropdownItem>

                    <DropdownItem
                      key="jobs"
                      startContent={<FaBriefcase />}
                      className={
                        currentPath == "/vendor/jobs"
                          ? "bg-green-100 "
                          : ""
                      }
                    >
                      My Jobs
                    </DropdownItem>

                    <DropdownItem
                      key="transactions"
                      startContent={<FaDollarSign />}
                      className={
                        currentPath === "/vendor/transactions"
                          ? "bg-green-100"
                          : ""
                      }
                    >
                      Transactions
                    </DropdownItem>

                    <DropdownItem
                      key="support"
                      startContent={<FaQuestionCircle />}
                      className={
                        currentPath === "/vendor/support" ? "bg-green-100" : ""
                      }
                    >
                      Help & Support
                    </DropdownItem>

                    <DropdownItem
                      key="logout"
                      color="error"
                      startContent={<FaSignOutAlt />}
                    >
                      Log Out
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
      </Navbar>
      <ServiceRequestClient
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
