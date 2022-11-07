import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-500 border-b-2 border-solid border-slate-100 py-5">
      <span className="text-white text-2xl">Hire A Developy</span>
    </header>
  );
}
