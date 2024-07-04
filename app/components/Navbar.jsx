import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { name: "home", route: "/" },
    { name: "about", route: "/about" },
    { name: "therapy", route: "/therapy" },
    { name: "community", route: "/community" },
    { name: "Sign in", route: "/login" },
  ];
  return (
    <nav className="bg-green-800 text-white font-semibold flex justify-between items-center pl-8 fixed top-0 left-0 w-full z-50">
      <Link href={"/"}>
        <Image
          src="https://res.cloudinary.com/druryt8ny/image/upload/v1700518851/rsnuvxsp8itnttc6hk9u.png"
          width={100}
          height={100}
        />
      </Link>
      <ul className="flex">
        {links.map((link) => (
          <li key={link.name} className="py-[22px]">
            <Link
              href={link.route}
              className="capitalize hover:bg-green-600 px-6 py-6"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
