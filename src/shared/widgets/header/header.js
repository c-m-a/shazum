import Logo from "./logo";
import Link from "next/link";
import NavItems from "./nav-items";

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 z-50 border-b border-b-gray-700 px-10 flex items-center justify-between h-20 bg-white text-black">
      <div>
        <Link href={'/'}>
          <Logo />
        </Link>
      </div>
      <div>
        <NavItems />
      </div>
    </header>
  )
};

export default Header;
