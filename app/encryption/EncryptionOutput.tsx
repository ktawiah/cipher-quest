interface OutputProps {
  encryptedMessageOutput: {
    output: string;
  };
}

export function EncryptionOutput({ encryptedMessageOutput }: OutputProps) {
  return (
    <>
      <label htmlFor="enc-message" className="md:text-2xl">
        See Encrypted Message below👇
      </label>
      <textarea
        name="encMessage"
        id="enc-message"
        cols={30}
        rows={5}
        readOnly
        placeholder="Enter message in the textbox above to view your encrypted message here"
        className="rounded-md p-2 placeholder:text-sm bg-slate-100 md:w-[45vw] md:h-[40vh] text-black"
        value={encryptedMessageOutput.output}
      />
    </>
  );
}
