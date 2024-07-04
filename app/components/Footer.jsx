import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-12 pb-2 px-20 text-green-700">
      <h1 className="font-semibold text-3xl">Thrive</h1>
      <div className="py-6 flex flex-col gap-2">
        <Link href={"mailto:wajudkareem757@gmail.com"}>
          Send a Mail: wajudkareem757@gmail.com
        </Link>
        <Link href={"/"}>Linkedin: Wajud Kareem</Link>
        <Link href={"/"}>Twitter: Wajud Kareem</Link>
      </div>
      <p className="text-center">
        copyright &copy; {new Date().getFullYear()}. Kareem Wajud.
      </p>
    </div>
  );
};

export default Footer;
