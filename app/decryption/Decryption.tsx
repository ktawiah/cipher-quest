"use client";
import { DecryptionOutput } from "./DecryptionOutput";
import { DecryptionFormInput } from "./DecryptionFormInput";
import Navbar from "../components/Navbar";
import Image from "next/image";
import DecryptionImage from "../../public/3d-internet-secuirty-badge__1_-removebg-preview.png";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import ErrorModal from "../components/ErrorModal";

const Decryption = () => {
  const [decryptionData, setDecryptionData] = useState(() => {
    return { message: "", totalShifts: 0 };
  });
  const [decryptedMessageOutput, setDecryptedMessageOutput] = useState(() => {
    return { output: "" };
  });
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === "message") {
      setDecryptionData((prev) => {
        return {
          ...prev,
          message: value,
        };
      });
    }
  };

  const handleButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    const { name } = event.target as HTMLInputElement;
    if (name === "plusBtn") {
      setDecryptionData((prev) => ({
        ...prev,
        totalShifts: prev.totalShifts + 1,
      }));
    } else if (name === "minusBtn" && decryptionData.totalShifts > 0) {
      setDecryptionData((prev) => ({
        ...prev,
        totalShifts: prev.totalShifts - 1,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (decryptionData.message && decryptionData.totalShifts) {
      const lowercaseAsciiCharacters = "abcdefghijklmnopqrstuvwxyz";
      const numberString = "0123456789";
      let decryptedMessage = "";

      for (let i = 0; i < decryptionData.message.length; i++) {
        const currentCharacter = decryptionData.message[i];

        if (lowercaseAsciiCharacters.includes(currentCharacter)) {
          const decryptedCharIndex =
            (lowercaseAsciiCharacters.indexOf(currentCharacter) +
              lowercaseAsciiCharacters.length -
              decryptionData.totalShifts) %
            lowercaseAsciiCharacters.length;
          decryptedMessage += lowercaseAsciiCharacters[decryptedCharIndex];
        } else if (
          lowercaseAsciiCharacters.toUpperCase().includes(currentCharacter)
        ) {
          const decryptedCharIndex =
            (lowercaseAsciiCharacters.indexOf(currentCharacter.toLowerCase()) +
              lowercaseAsciiCharacters.length -
              decryptionData.totalShifts) %
            lowercaseAsciiCharacters.length;
          decryptedMessage +=
            lowercaseAsciiCharacters[decryptedCharIndex].toUpperCase();
        } else if (numberString.includes(currentCharacter)) {
          const decryptedCharIndex =
            (numberString.indexOf(currentCharacter) +
              numberString.length -
              decryptionData.totalShifts) %
            numberString.length;
          decryptedMessage += numberString[decryptedCharIndex];
        } else {
          decryptedMessage += currentCharacter;
        }
      }
      console.log(decryptedMessage);
      setDecryptedMessageOutput((prev) => {
        return {
          ...prev,
          output: decryptedMessage,
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
        <DecryptionFormInput
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
          decryptionData={decryptionData}
        />
        <div
          id="output-container"
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <label htmlFor="enc-message" className="md:text-2xl">
            See decrypted Message below👇
          </label>
          <DecryptionOutput {...decryptedMessageOutput} />
          <Image
            alt="Decryption Lock Image"
            src={DecryptionImage}
            width={300}
            height={200}
            className="hidden md:block md:animate-pulse"
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

export default Decryption;
