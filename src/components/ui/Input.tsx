import React from "react";

const Input: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="w-full">
      <div>{name}</div>
      <input className="w-4/5 h-12 px-2 border border-gray-200" />
    </div>
  );
};

export default Input;
