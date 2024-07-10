"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SignOutButton from "../components/SignOutButton";

const ProfileSidebar = () => {
  const pathname = usePathname();
  const links = [
    { name: "general", route: "/profile" },
    { name: "settings", route: "/profile/settings" },
  ];
  return (
    <ul className="flex flex-col gap-6 items-center max-w-44 w-fit px-24 bg-green-50 pt-24 border-r-2 border-gray-300">
      {links.map((link) => (
        <li key={link.name} className="">
          <Link
            href={link.route}
            className={
              pathname === link.route
                ? "block w-32 text-center capitalize bg-green-600 hover:bg-green-600 py-2 rounded-sm "
                : "block w-32 text-center capitalize bg-gray-400 hover:bg-green-600 py-2  rounded-sm "
            }
          >
            {link.name}
          </Link>
        </li>
      ))}
      <div
        className={
          "block w-32 text-center capitalize bg-gray-400 hover:bg-green-600 py-2  rounded-sm "
        }
      >
        <SignOutButton text="Log Out" />
      </div>
    </ul>
  );
};

export default ProfileSidebar;
