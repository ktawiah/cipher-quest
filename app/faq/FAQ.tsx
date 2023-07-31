"use client";
import { useState } from "react";
import FAQNavbar from "../components/FAQNavbar";
import QAs from "./Q&As";
import FAQCard from "./FAQList";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleSection = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const list = QAs.map(({ key, question, answer }, index) => {
    const expanded = index === expandedIndex;
    return (
      <FAQCard
        key={key}
        answer={answer}
        question={question}
        expanded={expanded}
        onToggle={() => toggleSection(index)}
      />
    );
  });

  return (
    <>
      <FAQNavbar />
      <div className="h-[90vh] flex flex-col justify-evenly items-center">
        {list}
      </div>
    </>
  );
};

export default Faq;
