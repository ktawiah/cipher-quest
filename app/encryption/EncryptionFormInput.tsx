import { FormEvent, ChangeEvent, MouseEvent, RefObject } from "react";

interface FromPropTypes {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
  shiftRef: RefObject<HTMLInputElement>;
  encryptionData: {
    message: string;
    totalShifts: number;
  };
}
export function EncryptionFormInput({
  handleSubmit,
  handleInputChange,
  handleButtonClick,
  shiftRef,
  encryptionData,
}: FromPropTypes) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 md:flex-row md:items-end "
    >
      <div className="flex flex-col gap-3 md:w-[45vw]">
        <label htmlFor="message" className="text-2xl font-semibold">
          ENCRYPT YOUR MESSAGE
        </label>
        <textarea
          name="messageInput"
          id="message"
          cols={25}
          rows={5}
          placeholder="Enter message here to encrypt"
          className="rounded-md p-2 text-black placeholder:text-sm bg-slate-100 mb-7 md:h-[30vh]"
          onChange={handleInputChange}
        />
        <div className="md:flex md:justify-between">
          <div className="flex flex-col items-center py-2 font-bold rounded-lg bg-slate-100 md:px-3 md:py-3">
            <p className="text-[#040608] text-sm text-center md:text-sm">
              Enter the number{" "}
              <span className="md:whitespace-nowrap md:text-sm">
                {" "}
                of shifts here
              </span>
            </p>
            <div className="flex items-center w-full justify-evenly">
              <button
                className="px-3 py-1 text-lg font-bold text-black rounded-md bg-slate-200 hover:scale-x-125 hover:scale-y-105 md:text-xl"
                name="minusBtn"
                onClick={handleButtonClick}
              >
                -
              </button>
              <input
                type="text"
                name="totalShifts"
                id="totalShifts"
                readOnly
                value={encryptionData.totalShifts}
                ref={shiftRef}
                className="inline-block w-auto px-3 font-serif text-2xl text-center text-black bg-transparent rounded-md justify-self-center"
              />
              <button
                className="px-3 py-1 text-lg font-bold text-black rounded-md bg-slate-200 hover:scale-x-125 hover:scale-y-105 md:text-xl"
                name="plusBtn"
                onClick={handleButtonClick}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-end w-full md:self-end">
            <input
              type="submit"
              value="Encrypt"
              className="cursor-pointer text-[#040608] bg-slate-100 px-3 py-1 rounded-md font-bold hover:scale-105 hover:bg-slate-200 mt-3 md:mt-0 md:px-5 md:text-xl"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
