import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  InventoryIcon,
  AddProductIcon,
  EmployeesIcon,
  LogoutIcon
} from "@/icons/Icons";
import { useLocation } from "react-router-dom";

const PageLink = [
  {
    item: "Inicio",
    icon: <HomeIcon className="mr-4" />,
    url: "",
  },
  {
    item: "Inventario",
    icon: <InventoryIcon className="mr-4" />,
    url: "Inventario",
  },
  {
    item: "Agregar Producto",
    icon: <AddProductIcon />,
    url: "Agregar-Producto",
  },
  {
    item: "Empleados",
    icon: <EmployeesIcon className="mr-4" />,
    url: "Empleados",
  },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex flex-col bg-white w-[280px] h-full p-4 shadow-lg items-center">
      <Link to={"/"}>
        <img
          src="/teddystore.png"
          alt="Logo-ts"
          className="flex justify-center items-center py-14"
        />
      </Link>
      <ul className="justify-center items-center pt-12">
        {PageLink.map(({ item, icon, url }) => (
          <li
            key={item}
            className={`text-black/70  w-[220px] h-14 flex items-center rounded-[10px]  ${
              location.pathname === `/${url}`
                ? "bg-[#F9D6D5] text-white transition-all"
                : "hover:text-[#F9D6D5]"
            }`}
          >
            <Link
              to={`/${url}`}
              className="flex items-center pl-7 text-16 font-bold"
            >
              {icon}
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="justify-center items-center pt-96">
        <li className="text-black/70  w-[220px] h-14 flex items-center rounded-[10px] hover:text-[#F9D6D5]">  
          <Link to={"/Logout"} className="flex items-center pl-7 text-16 font-bold">
          <LogoutIcon className="mr-4"/>
          Cerrar sesión
          </Link> 
        </li>
      </ul>

    </nav>
  );
}

export default Navigation;
