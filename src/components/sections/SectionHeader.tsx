import React from "react";

const SectionHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="w-full h-24 lg:h-40 flex justify-center items-center bg-gray-200 text-2xl lg:text-4xl font-semibold uppercase">
      {text}
    </div>
  );
};

export default SectionHeader;
