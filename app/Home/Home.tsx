"use client";
import Image from "next/image";
import EncryptionImage from "../../public/3d-internet-secuirty-badge-removebg-preview.png";
import { HomeNavbar } from "./HomeNavbar";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <main className="flex flex-col items-center justify-evenly md:flex-row text-white min-h-[88vh]">
        <section className="flex flex-col items-center gap-4 px-4 lg:px-8 lg:h-full lg:justify-center md:px-11">
          <article className="flex flex-col text-center lg:pb-2">
            <span className="text-2xl font-bold lg:text-3xl xl:text-4xl md:text-2xl animate-pulse">
              Welcome to
            </span>
            <span className="text-5xl text-[rgba(255,255,255,0.93)] font-bold lg:text-6xl xl:text-7xl md:text-5xl font-[Lobster]">
              CipherQuest
            </span>
          </article>
          <article className="text-sm text-gray-200 w-[30ch] lg:w-[35ch] xl:w-[40ch] text-center font-serif  italic md:text-lg md:pb-6 lg:pb-11 leading-6">
            Explore the power of encryption and decryption with one button
            click. Discover a new and fun way of encrypting messages.
          </article>
          <div className="hidden md:flex md:gap-7 ">
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
          className="self-center w-[75%] md:w-[55%] lg:w-[44%] h-auto animate-image "
        />
      </main>
    </>
  );
};

export default Home;
