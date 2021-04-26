import DropdownItem from "components/ui/DropdownItem";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface ItemProps {
  title: string;
  items: string[];
}

const CategoryFilterItem: React.FC<ItemProps> = ({ title, items }) => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(items[0]);

  const updateCurrent = (item: string) => {
    setCurrent(item);
    setShow(false);
  };

  return (
    <div className="w-11/50 relative">
      <p className="text-sm mb-1">{title}</p>
      <DropdownItem onClick={() => setShow(!show)} item={current}>
        {!show ? <BiChevronDown size={20} /> : <BiChevronUp size={20} />}
      </DropdownItem>
      <div
        className={`${show ? "flex" : "hidden"} flex-col absolute t-0 w-full`}
      >
        {items.map((item) => (
          <DropdownItem onClick={() => updateCurrent(item)} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilterItem;
