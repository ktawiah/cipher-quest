import Link from "next/link";
export function HomeNavbar({}) {
  return (
    <nav className=" text-white w-full h-[10vh] lg:flex lg:justify-end">
      <div className="w-full h-full lg:w-1/2">
        <div className="w-full h-full flex justify-evenly items-center md:text-2xl lg:items-end ">
          <Link
            href={"/encryption"}
            className="cursor-pointer hover:underline focus:underline active:underline lg:hidden text-sm hover:scale-110 hover:font-bold hover:duration-200"
          >
            ENCRYPT
          </Link>
          <Link
            href={"/decryption"}
            className="cursor-pointer hover:underline focus:underline active:underline lg:hidden text-sm hover:duration-200 hover:font-bold hover:scale-110"
          >
            DECRYPT
          </Link>
          <Link
            href={"/about"}
            className="cursor-pointer hover:underline focus:underline active:underline text-sm lg:mt-4 hover:scale-110 hover:font-bold hover:duration-200"
          >
            ABOUT
          </Link>
          <Link
            href={"faq"}
            className="cursor-pointer hover:underline focus:underline active:underline text-sm lg:mt-4 hover:scale-110 hover:font-bold hover:duration-200"
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}
