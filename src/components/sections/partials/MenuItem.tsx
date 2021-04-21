import React from "react";

const MenuItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="px-4 font-medium hover:text-primary delay-75 cursor-pointer">
      {text}
    </p>
  );
};

export default MenuItem;
