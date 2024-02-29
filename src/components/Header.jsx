import React from "react";
import MenuItem from "./MenuItem";
import { IoHome, IoInformationCircle } from "react-icons/io5";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={IoHome} />
        <MenuItem title="ABOUT" address="/about" Icon={IoInformationCircle} />
        <MenuItem
          title="Contact"
          address="/contact"
          Icon={IoInformationCircle}
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-purple-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline mr-2">MMR</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
