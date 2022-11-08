import { useState } from "react";
import Logo from "../assets/images/logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-row bg-slate-400">
      <div className="flex flex-col w-56 bg-slate-500 rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-400">
            <img src={Logo} className="p-5" alt="Hire A Developy Logo" />
          </h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-log-in"></i>
              </span>
              <span className="text-sm font-medium">Login</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-user"></i>
              </span>
              <span className="text-sm font-medium">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">Products</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
