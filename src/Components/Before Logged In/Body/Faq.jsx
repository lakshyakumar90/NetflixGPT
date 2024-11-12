import React, { useState } from "react";
import { faqData } from "../../../utils/Before login/faqData";
import FaqElem from "./FaqElem";
import GetStartedButton from "./GetStartedButton";

const Faq = () => {
  const [isSelected, setIsSelected] = useState(null);

  const handleSelected = (index) => {
    setIsSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className="px-20 pb-5">
      <h1 className="text-white font-bold text-3xl mb-10">
        Frequently Asked Questions
      </h1>
      {faqData.map((elem, index) => (
        <div key={index}>
          <FaqElem
            elem={elem}
            isSelected={isSelected === index}
            onClick={() => handleSelected(index)}
          />
          {isSelected === index && (
            <div className="px-7 py-6 w-full bg-[rgb(27,27,27)] rounded-xl mb-5 text-white text-xl font-semibold transition-opacity">
              {elem.description}
            </div>
          )}
        </div>
      ))}
      <div className="left-1/2 absolute -translate-x-1/2">
      <GetStartedButton />
      </div>
    </div>
  );
};

export default Faq;
