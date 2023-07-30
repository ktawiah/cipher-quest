import { FormEvent, ChangeEvent, MouseEvent } from "react";
interface FormPropShape {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleButtonClick: (event: MouseEvent) => void;
  decryptionData: {
    message: string;
    totalShifts: number;
  };
}

export function DecryptionFormInput({
  handleSubmit,
  handleInputChange,
  handleButtonClick,
  decryptionData,
}: FormPropShape) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 md:flex-row md:items-end "
    >
      <div className="flex flex-col gap-3 md:w-[45vw]">
        <label htmlFor="message" className="text-2xl font-semibold">
          DECRYPT YOUR MESSAGE
        </label>
        <textarea
          name="message"
          id="message"
          cols={25}
          rows={5}
          placeholder="Enter message here to decrypt"
          className="rounded-md p-2 text-black placeholder:text-sm bg-slate-100 mb-7 md:h-[35vh]"
          onChange={handleInputChange}
        />
        <div className="md:flex md:justify-between">
          <div className="flex flex-col bg-slate-100 items-center font-bold rounded-lg py-2 md:px-3 md:py-3">
            <p className="text-[#040608] text-sm text-center md:text-sm">
              Enter the number{" "}
              <span className="md:whitespace-nowrap md:text-sm">
                {" "}
                of shifts here
              </span>
            </p>
            <div className="flex w-full justify-evenly items-center">
              <button
                className="text-lg bg-slate-200 text-black rounded-md font-bold hover:scale-x-125 hover:scale-y-105 px-3 py-1 md:text-xl"
                name="minusBtn"
                onClick={handleButtonClick}
              >
                -
              </button>
              <div className="text-black inline-block px-3 rounded-md text-2xl md:px-6 font-serif">
                {decryptionData.totalShifts}
              </div>
              <button
                className="text-lg bg-slate-200 text-black rounded-md font-bold hover:scale-x-125 hover:scale-y-105 px-3 py-1 md:text-xl"
                name="plusBtn"
                onClick={handleButtonClick}
              >
                +
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end md:self-end">
            <input
              type="submit"
              value="DECRYPT"
              className="cursor-pointer text-[#040608] bg-slate-100 px-3 py-1 rounded-md font-bold hover:scale-105 hover:bg-slate-200 mt-3 md:mt-0 md:px-5 md:text-xl"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
