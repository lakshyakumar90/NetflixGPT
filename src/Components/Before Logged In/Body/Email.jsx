import React, {useRef} from "react";

const Email = () => {
  const inputRef = useRef(null);
  const handleFocusInput = () => {
    inputRef.current.focus(); // Focus the input field when button is clicked
  };
  return (
    <div className="flex justify-center items-center gap-4 py-6">
      <input
        ref={inputRef}
        id="input"
        className="bg-inherit border-[1px] border-zinc-200 text-white w-[20rem] h-10 rounded-full px-6 py-6"
        placeholder="Email Address"
        type="text"
      />
      <label for="input">
        <button onClick={handleFocusInput} className="px-4 py-[0.8rem] bg-red-600 font-bold text-slate-200 rounded-full">
          Get Started
        </button>
      </label>
    </div>
  );
};

export default Email;
