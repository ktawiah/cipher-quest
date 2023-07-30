"use client";
import Image from "next/image";
import EncryptionImage from "../public/3d-internet-secuirty-badge-removebg-preview.png";
import { HomeNavbar } from "./HomeNavbar";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col text-white min-h-[90vh]">
        <main className="flex flex-col h-[90vh] items-center justify-evenly md:flex-row">
          <section className="flex flex-col items-center gap-4 px-4 lg:px-8 lg:h-full lg:justify-center">
            <article className="flex flex-col text-center lg:pb-2">
              <span className="text-2xl font-bold lg:text-3xl xl:text-4xl md:text-2xl animate-pulse">
                Welcome to
              </span>
              <span className="text-4xl font-bold lg:text-6xl xl:text-7xl md:text-5xl ">
                CipherQuest
              </span>
            </article>
            <article className="text-sm text-gray-200 w-[30ch] lg:w-[35ch] xl:w-[40ch] text-center font-serif  italic md:text-lg lg:pb-11">
              Explore the power of encryption and decryption with one button
              click. Discover a new and fun way of encrypting messages.
            </article>
            <div className="hidden lg:flex lg:gap-7 ">
              <Link href={"/encryption"}>
                <button className="py-3 text-xl font-bold text-black bg-white rounded-lg px-7 hover:opacity-70 hover:scale-105 hover:duration-300">
                  Encrypt
                </button>
              </Link>
              <Link href={"/decryption"}>
                <button className="py-3 text-xl font-bold text-black bg-white rounded-lg px-7 hover:opacity-70 hover:scale-105 hover:duration-300">
                  Decrypt
                </button>
              </Link>
            </div>
          </section>
          <Image
            alt="Encryption Image"
            src={EncryptionImage}
            width={390}
            height={390}
            className="self-center h-auto lg:w-[35.375em]  sm:w-[25.0625em] hover:animate-pulse animate-image"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
