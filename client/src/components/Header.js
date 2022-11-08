import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";

import Splash from "../assets/images/splash.png";

export default function Header() {
  return (
    <header className="bg-slate-500 border-b-2 border-solid border-slate-100 py-5 fixed top-0">
      <span className="text-white text-2xl">
        <img
          className="border-dashed rounded border-white border-2"
          src={Splash}
        />
      </span>
    </header>
  );
}
