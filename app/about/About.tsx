import AboutNavbar from "../components/AboutNavbar";
import { FaGithub, FaMailBulk, FaTwitter, FaWikipediaW } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="">
        <AboutNavbar />
        <main className="flex flex-col items-center w-full text-white justify-evenly">
          <div className="flex flex-col items-center gap-3 p-4 border border-white rounded-lg w-[90%] md:w-[80%] lg:w-[60%]">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl font-bold">Meet the team</h1>
              <p>
                Kelvin Tawiah, the creator of CipherQuest, is an experienced
                developer with a strong background in cryptography and web
                application development. With a deep interest in encryption
                algorithms, Kelvin combined his expertise to build this app and
                make encryption more approachable. This app was created to
                showcase the power and simplicity of the Caesar cipher algorithm
                by providing a user-friendly interface, aiming to make
                encryption accessible to everyone and raise awareness about the
                importance of protecting sensitive information.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl font-bold">Contact Us</h1>

              <p>
                We would love to hear your feedback, answer any questions you
                may have, or discuss potential collaborations. Click on the
                links provided below to reach out to us and also follow us on
                our social media handle for more updates and information about
                our projects.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link href={"mailto:kelvintawiah224@gmail.com"}>
                <div className="flex flex-col items-center gap-2">
                  <FaMailBulk />
                  <p>Reach us via e-mail.</p>
                </div>
              </Link>
              <div className="flex flex-col items-center gap-2">
                <FaGithub />
                <p>View the source code on Github.</p>
              </div>
              <Link
                href={
                  "https://twitter.com/KelvinTawiah928?t=IeiTJiY0X363Xjk8LRHR2A&s=08"
                }
              >
                <div className="flex flex-col items-center gap-2">
                  <FaTwitter />
                  <p>Follow us on twitter for more updates.</p>
                </div>
              </Link>
              <Link href={"https://en.wikipedia.org/wiki/Caesar_cipher"}>
                <div className="flex flex-col items-center gap-2">
                  <FaWikipediaW />
                  <p>Learn more about the Caesar Cipher algorithm.</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
