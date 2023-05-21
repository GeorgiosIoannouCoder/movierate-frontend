import React from "react";
import { ImSpinner8 } from "react-icons/im";

export default function Submit({
  value,
  busy,
  isButtonDisabled,
  type,
  onClick,
}) {
  return (
    <button
      type={type || "submit"}
      className="w-full rounded-lg dark:bg-custom-gray bg-primary dark:text-primary text-custom-gray hover:bg-opacity-90 transition font-mono font-bold text-lg cursor-pointer h-10 flex items-center justify-center"
      disabled={isButtonDisabled}
      onClick={onClick}
      placeholder="Submit"
    >
      {busy ? <ImSpinner8 className="animate-spin" /> : value}
    </button>
  );
}
