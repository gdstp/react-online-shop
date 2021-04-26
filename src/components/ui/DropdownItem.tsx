import React from "react";

interface ItemProps {
  item: string;
  onClick: () => void;
}

const DropdownItem: React.FC<ItemProps> = ({ item, onClick, children }) => {
  return (
    <div
      onClick={() => onClick()}
      className="flex cursor-pointer justify-between items-center border border-black w-full px-4 py-4 text-sm"
    >
      {item}
      {children}
    </div>
  );
};

export default DropdownItem;
