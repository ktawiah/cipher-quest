import { BiErrorAlt } from "react-icons/bi";

interface ErrorModalProps {
  description: string;
  buttonInfo: string;
  onClose: () => void;
}

const ErrorModal = (props: ErrorModalProps) => {
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-brightness-50 bg-opacity-20"
        onClick={props.onClose}
      >
        <div className="flex flex-col gap-2 p-3 bg-white rounded-md w-[55%] md:w-[45%] lg:w-[35%]">
          <div className="flex items-center justify-start gap-3">
            <BiErrorAlt />
            <h1 className="text-xl font-bold">Error</h1>
          </div>
          <p className="text-sm">{props.description}</p>
          <button
            onClick={props.onClose}
            className="self-end px-4 py-1 text-sm font-semibold text-white bg-blue-700 rounded-full cursor-pointer hover:scale-x-105"
          >
            {props.buttonInfo}
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
