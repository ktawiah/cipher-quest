import Link from "next/link";
export function HomeNavbar({}) {
  return (
    <nav className="w-full text-white flex md:justify-end h-[10vh] items-center">
      <div className="w-full md:w-1/2">
        <div className="flex items-center w-full justify-evenly md:text-2xl md:items-end ">
          <Link
            href={"/encryption"}
            className="text-sm cursor-pointer hover:underline focus:underline active:underline md:hidden hover:scale-110 hover:font-bold hover:duration-200"
          >
            ENCRYPT
          </Link>
          <Link
            href={"/decryption"}
            className="text-sm cursor-pointer hover:underline focus:underline active:underline md:hidden hover:duration-200 hover:font-bold hover:scale-110"
          >
            DECRYPT
          </Link>
          <Link
            href={"/about"}
            className="text-sm cursor-pointer hover:underline focus:underline active:underline md:mt-4 hover:scale-110 hover:font-bold hover:duration-200"
          >
            ABOUT
          </Link>
          <Link
            href={"faq"}
            className="text-sm cursor-pointer hover:underline focus:underline active:underline md:mt-4 hover:scale-110 hover:font-bold hover:duration-200"
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}
