import React from "react";

const Button: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <div
      className="w-80 h-12 text-white bg-black flex items-center justify-center font-bold cursor-pointer"
      onClick={() => onClick}
    >
      {text}
    </div>
  );
};

export default Button;
