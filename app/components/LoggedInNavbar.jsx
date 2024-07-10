import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import MainLinks from "./MainLinks";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white font-semibold flex justify-between items-center pl-8 fixed top-0 left-0 w-full z-50">
      <Link href={"/"}>
        <Image
          src="https://res.cloudinary.com/druryt8ny/image/upload/v1700518851/rsnuvxsp8itnttc6hk9u.png"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div className="flex items-stretch">
        <MainLinks />

        <div className="capitalize hover:bg-green-600 px-6 flex items-center border-r border-green-800">
          <SignOutButton text="Sign Out" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
