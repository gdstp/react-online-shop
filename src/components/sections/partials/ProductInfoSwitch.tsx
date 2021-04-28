import React, { useState } from "react";

const ProductInfoSwitch: React.FC<{
  onClick: (value: boolean) => void;
}> = ({ onClick }) => {
  const [show, setShow] = useState(true);
  const updateShow = (value: boolean) => {
    setShow(value);
    onClick(value);
  };
  return (
    <div className="w-48 m-auto flex justify-between">
      <p
        className={`${
          show ? "text-black border-b border-black" : "text-gray-400"
        } px-2 py-2 transition cursor-pointer`}
        onClick={() => updateShow(true)}
      >
        Description
      </p>
      <p
        className={`${
          !show ? "text-black border-b border-black" : "text-gray-400"
        } px-2 py-2 transition cursor-pointer`}
        onClick={() => updateShow(false)}
      >
        Details
      </p>
    </div>
  );
};

export default ProductInfoSwitch;
