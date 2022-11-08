import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-500 md:flex md:items-center md:justify-between md:p-6 fixed bottom-0 w-full">
      <span className="text-sm text-white sm:text-center">
        © 2022{" "}
        <a href="https://github.com/Chamath777" className="hover:underline">
          Chamath De Silva
        </a>
        &nbsp; and &nbsp;
        <a href="https://github.com/MarkBrooks1985" className="hover:underline">
          Mark Brooks
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
