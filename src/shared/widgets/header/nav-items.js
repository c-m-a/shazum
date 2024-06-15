import { navItems } from "@/app/config/constants";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className="w-full hidden md:flex items-center">
      {navItems.map((i, idx) => (
        <Link key={idx} href={"/"} className="px-5 text-lg">
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
