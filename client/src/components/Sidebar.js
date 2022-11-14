import { useState } from "react";
import Logo from "../assets/images/logo.png";

import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-row bg-slate-500 fixed bottom-0 left-0">
      <div className="flex flex-col w-56 bg-slate-500 rounded-r-3xl overflow-hidden border-solid border-2 border-white">
        <div className="flex items-center justify-center h-20 shadow-md">
          <img src={Logo} className="p-5" alt="Hire A Developy Logo" />
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="/"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/login"
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
              href="/logout"
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
              href="/signup"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-up-arrow"></i>
              </span>
              <span className="text-sm font-medium">Signup</span>
            </a>
          </li>
          <li>
            <a
              href="/Profile"
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
              href="/Products"
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
