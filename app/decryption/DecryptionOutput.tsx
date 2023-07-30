import React from "react";
export function DecryptionOutput({ output }: { output: string }) {
  return (
    <textarea
      name="encMessage"
      id="enc-message"
      cols={30}
      rows={5}
      readOnly
      placeholder="Enter message in the textbox above to view your decrypted message here"
      className="rounded-md p-2 placeholder:text-sm bg-slate-100 md:w-[45vw] md:h-[20vh] text-black"
      value={output}
    />
  );
}
