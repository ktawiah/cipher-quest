import Link from "next/link";

const AboutNavbar = () => {
  return (
    <nav className="flex items-end justify-center w-full py-6 text-white md:justify-end">
      <div className="flex w-full justify-evenly md:w-1/2 ">
        <Link
          href={"/"}
          className="text-sm cursor-pointer hover:underline focus:underline active:underline hover:scale-110 hover:font-bold hover:duration-200"
        >
          Home
        </Link>
        <Link
          href={"/faq"}
          className="text-sm cursor-pointer hover:underline focus:underline active:underline hover:scale-110 hover:font-bold hover:duration-200"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default AboutNavbar;
