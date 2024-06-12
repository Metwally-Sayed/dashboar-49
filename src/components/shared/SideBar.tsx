import {
  ArrowLeft,
  Bell,
  Car,
  ChevronDown,
  LayoutDashboard,
  LoaderPinwheel,
  Settings,
  Swords,
  User,
  Users,
  UsersRound,
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";

import {
  Bars3Icon,

  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,

} from "@heroicons/react/20/solid";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MENU = [
  { title: "Dashboard", icon: <LayoutDashboard />, href: "/" },
  { title: "User", icon: <User />, href: "/users" },
  {
    title: "Ride",
    icon: <Car />,
    href: "/ride",
    submenu: true,
    submenuItems: [
      { title: "Riders", icon: <Users />, href: "/ride/rides" },
      {
        title: "Come with you",
        icon: <UsersRound />,
        href: "/ride/come-with-you",
      },
      { title: "Pick me", icon: <UsersRound />, href: "/ride/pick-me" },
    ],
  },
  {
    title: "Competition",
    icon: <Swords />,
    href: "/competition",
    submenu: true,
    submenuItems: [
      {
        title: "competitions",
        icon: <Users />,
        href: "/competition/competitions",
      },
      { title: "Winners", icon: <UsersRound />, href: "/competition/winners" },
    ],
  },
  {
    title: "Wheel",
    icon: <LoaderPinwheel />,
    href: "/wheel",
    submenu: true,
    submenuItems: [
      {
        title: "wheels",
        icon: <Users />,
        href: "/wheel/wheels",
      },
      {
        title: "Wheel Items",
        icon: <UsersRound />,
        href: "/wheel/wheel-items",
      },
    ],
  },
  {
    title: "Settings",
    icon: <Settings />,
    href: "/setting",
    submenu: true,
    submenuItems: [
      { title: "Notifications", href: "", icon: <Bell /> },
      { title: "Profile", href: "", icon: <UsersRound /> },
    ],
  },
];

const SideBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedSubmenuIndex, setOpenedSubmenuIndex] = useState<number | null>(
    null
  );

  const handleSubmenuClick = (index: number | null) => {
    setOpenedSubmenuIndex(openedSubmenuIndex === index ? null : index);
  };

  return (
    <>
      <header className="bg-white flex flex-col ">
        <nav
          className=" flex flex-col w-full items-end justify-end "
          aria-label="Global"
        >
          <div className="flex lg:hidden w-full items-end justify-end ">
            <button
              type="button"
              className="inline-flex items-end justify-end min-w-full rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex w-full ">
            <div
              className={`bg-[#0f172a] min-h-screen text-white p-5 pt-8 ${
                open ? "w-72" : "w-20"
              } duration-300 relative `}
            >
              {/* Button to toggle sidebar */}
              <ArrowLeft
                onClick={() => setOpen(!open)}
                className={`text-3xl bg-white text-[#0f172a] rounded absolute -right-3 top-9 border cursor-pointer ${
                  !open && "rotate-180"
                }`}
              />
              <div className="inline-flex">
                {/* Logo (conditional based on sidebar state) */}
                {open && <h1 className="text-2xl">logo</h1>}
              </div>
              <ul className="pt-6">
                {/* Map through menu items */}
                {MENU.map((menu, index) => (
                  <React.Fragment key={index}>
                    {/* Sidebar menu item */}
                    <Link
                      to={menu.href}
                      className="flex items-center my-6 cursor-pointer p-2 hover:bg-[#272e3f] rounded-sm "
                    >
                      <span className={`text-2xl block float-left mr-2`}>
                        {menu.icon}
                      </span>
                      <span
                        className={`text-base font-medium flex-1  ${
                          !open && "hidden"
                        }`}
                      >
                        {menu.title}
                      </span>
                      {/* Render submenu toggle if submenu exists */}
                      {menu.submenu && open && (
                        <ChevronDown
                          className={`${
                            openedSubmenuIndex === index && "rotate-180"
                          }`}
                          onClick={() => handleSubmenuClick(index)}
                        />
                      )}
                    </Link>
                    {/* Render submenu if clicked submenu matches current index */}
                    {menu.submenu && openedSubmenuIndex === index && open && (
                      <ul>
                        {/* Map through submenu items */}
                        {menu.submenuItems.map((item, subIndex) => (
                          <Link to={item?.href}>
                            <li
                              className="flex items-center my-6 cursor-pointer p-2 hover:bg-[#272e3f] rounded-sm px-5 "
                              key={subIndex}
                            >
                              {item.title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </PopoverGroup>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                logo
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {MENU.map((menu, index) => (
                    <Disclosure as="div" key={index} className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <a href={menu.href}>{menu.title}</a>

                            {menu.submenuItems && (
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            )}
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {menu?.submenuItems?.map((item) => (
                              <DisclosureButton
                                key={item.title}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.title}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};

export default SideBar;
