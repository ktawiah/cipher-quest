"use client";
import { EncryptionOutput } from "./EncryptionOutput";
import { EncryptionFormInput } from "./EncryptionFormInput";
import Navbar from "../components/Navbar";
import EncryptionImage from "../../public/3d-internet-secuirty-badge-removebg-preview.png";
import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useRef,
  useState,
  useEffect,
} from "react";
import ErrorModal from "../components/ErrorModal";

const Encryption = () => {
  const [encryptionData, setEncryptionData] = useState(() => ({
    message: "",
    totalShifts: 0,
  }));
  const [encryptedMessageOutput, setEncryptedMessageOutput] = useState(() => {
    return { output: "" };
  });
  const shiftRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (shiftRef.current && shiftRef.current.value) {
      shiftRef.current.style.width = `${7 * shiftRef.current.value.length}ch`;
    }
  }, [shiftRef.current?.value]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === "messageInput") {
      setEncryptionData((prev) => {
        return {
          ...prev,
          message: value,
        };
      });
    }
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.target as HTMLInputElement;
    if (name === "plusBtn") {
      setEncryptionData((prev) => ({
        ...prev,
        totalShifts: prev.totalShifts + 1,
      }));
    } else if (name === "minusBtn" && encryptionData.totalShifts > 0) {
      setEncryptionData((prev) => ({
        ...prev,
        totalShifts: prev.totalShifts - 1,
      }));
    }
  };

  const lowercaseAsciiCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numberString = "0123456789";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (encryptionData.message && encryptionData.totalShifts) {
      let encryptedMessage = "";

      for (let i = 0; i < encryptionData.message.length; i++) {
        const currentCharacter = encryptionData.message[i];

        if (lowercaseAsciiCharacters.includes(currentCharacter)) {
          const encryptedCharIndex =
            (lowercaseAsciiCharacters.indexOf(currentCharacter) +
              encryptionData.totalShifts) %
            lowercaseAsciiCharacters.length;
          encryptedMessage += lowercaseAsciiCharacters[encryptedCharIndex];
        } else if (
          lowercaseAsciiCharacters.toUpperCase().includes(currentCharacter)
        ) {
          const encryptedCharIndex =
            (lowercaseAsciiCharacters.indexOf(currentCharacter.toLowerCase()) +
              encryptionData.totalShifts) %
            lowercaseAsciiCharacters.length;
          encryptedMessage +=
            lowercaseAsciiCharacters[encryptedCharIndex].toUpperCase();
        } else if (numberString.includes(currentCharacter)) {
          const encryptedCharIndex =
            (numberString.indexOf(currentCharacter) +
              encryptionData.totalShifts) %
            numberString.length;
          encryptedMessage += numberString[encryptedCharIndex];
        } else {
          encryptedMessage += currentCharacter;
        }
      }

      setEncryptedMessageOutput((prev) => {
        return {
          ...prev,
          output: encryptedMessage,
        };
      });
    } else {
      setShowError(true);
    }
  };

  const onClose = () => {
    setShowError(false);
  };

  return (
    <>
      <Navbar />
      <main className="text-white h-[90vh] flex flex-col justify-evenly items-center md:flex-row ">
        <EncryptionFormInput
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
          shiftRef={shiftRef}
          encryptionData={encryptionData}
        />
        <div
          id="output-container"
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <EncryptionOutput encryptedMessageOutput={encryptedMessageOutput} />
          <Image
            src={EncryptionImage}
            alt="Encryption Lock Image"
            layout="fill"
            objectFit="contain"
            className="blur-[10px] -z-50 animate-pulse"
          />
        </div>
      </main>
      {showError && (
        <ErrorModal
          buttonInfo="OK"
          description="Please ensure that the message input is not empty and the total number of shifts is greater than 1."
          onClose={onClose}
        />
      )}
    </>
  );
};

export default Encryption;
