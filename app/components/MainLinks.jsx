"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MainLinks = () => {
  const pathname = usePathname();
  const links = [
    { name: "home", route: "/", action: "" },
    { name: "about", route: "/about", action: "" },
    { name: "therapy", route: "/therapy", action: "" },
    { name: "profile", route: "/profile", action: "" },
  ];
  return (
    <ul className="flex items-stretch">
      {links.map((link) => (
        <li key={link.name} className="py-[22px]">
          <Link
            href={link.route}
            className={
              pathname === link.route
                ? "capitalize bg-green-600 hover:bg-green-600 px-6 py-6 border-r border-green-800"
                : "capitalize hover:bg-green-600 px-6 py-6 border-r border-green-800"
            }
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainLinks;
