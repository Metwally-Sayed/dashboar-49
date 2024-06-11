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
      { title: "Wheel Items", icon: <UsersRound />, href: "/wheel/wheel-items" },
    ],
  },
  {
    title: "Settings",
    icon: <Settings />,
    href: "/setting",
    submenu: true,
    submenuItems: [
      { title: "Notifications", icon: <Bell /> },
      { title: "Profile", icon: <UsersRound /> },
    ],
  },
];

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [openedSubmenuIndex, setOpenedSubmenuIndex] = useState(null);

  const handleSubmenuClick = (index: number | React.SetStateAction<null>) => {
    setOpenedSubmenuIndex(openedSubmenuIndex === index ? null : index);
  };

  return (
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
                className={`text-base font-medium flex-1  ${!open && "hidden"}`}
              >
                {menu.title}
              </span>
              {/* Render submenu toggle if submenu exists */}
              {menu.submenu && open && (
                <ChevronDown
                  className={`${openedSubmenuIndex === index && "rotate-180"}`}
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
  );
};

export default SideBar;
