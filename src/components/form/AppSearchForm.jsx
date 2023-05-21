import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const style =
  "text-primary dark:focus:text-custom-gold focus:text-custom-gold dark:text-custom-gray text-lg font-mono rounded-3xl dark:border-custom-gold border-custom-gold";

export default function AppSearchForm({
  showResetIcon,
  placeholder,
  onSubmit,
  onReset,
  styleClassName = style,
}) {
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleReset = () => {
    setValue("");
    onReset();
  };

  return (
    <form className="relative" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className={
          "border-2 transition bg-transparent rounded p-1 outline-2" +
          styleClassName
        }
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />

      {showResetIcon ? (
        <button
          onClick={handleReset}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-2 text-primary dark:text-custom-gray"
        >
          <AiOutlineClose />
        </button>
      ) : null}
    </form>
  );
}
