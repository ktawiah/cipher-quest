interface MenuPropsShape {
  answer: string;
  question: string;
  expanded: boolean;
  onToggle: () => void;
}

const MenuSection = ({
  answer,
  question,
  expanded,
  onToggle,
}: MenuPropsShape) => {
  return (
    <div className="flex flex-col px-3 gap-1 py-3 rounded-tl-3xl rounded-br-3xl border border-white w-[60%] text-white ">
      <div className="flex justify-between w-full">
        <p className={`${expanded ? "text-base" : "text-sm "}`}>{question}</p>
        <button
          className={` ${
            expanded ? "font-semibold border border-white px-2 rounded-md" : ""
          }`}
          onClick={onToggle}
        >
          {expanded ? "CLOSE" : "EXPAND"}
        </button>
      </div>
      {expanded && <p className="pl-8 text-sm italic">{answer}</p>}
    </div>
  );
};

export default MenuSection;
