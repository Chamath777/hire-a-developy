import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-500 md:flex md:items-center md:justify-between md:p-6 fixed bottom-0 w-full border-solid border-t-2 border-white">
      <span className="text-sm text-white sm:text-center">
        © 2022{" "}
        <a href="https://github.com/Chamath777" className="hover:underline">
          Chamath De Silva
        </a>
        &nbsp; and &nbsp;
        <a href="https://github.com/MarkBrooks1985" className="hover:underline">
          Mark Brooks
        </a>
        .&nbsp; All Rights Reserved.
      </span>
    </footer>
  );
}
