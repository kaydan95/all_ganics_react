import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="uppercase flex-1 font-bold border-main border rounded text-2xl p-4 m-2 w-72 text-main hover:bg-main hover:border-none hover:text-highlight"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
