import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-center items-end text-white md:justify-end">
      <div className="flex w-full justify-evenly md:w-1/2 ">
        <Link
          href={"/about"}
          className="hover:underline focus:underline active:underline text-sm hover:scale-110 hover:font-bold hover:duration-200 cursor-pointer"
        >
          ABOUT
        </Link>
        <Link
          href={"/faq"}
          className="hover:underline focus:underline active:underline text-sm hover:scale-110 hover:font-bold hover:duration-200 cursor-pointer"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
