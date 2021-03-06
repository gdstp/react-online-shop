import DropdownItem from "components/ui/DropdownItem";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface ItemProps {
  title: string;
  items: string[];
  handleChange?: (value: string) => void;
}

const CategoryFilterItem: React.FC<Partial<HTMLDivElement> & ItemProps> = ({
  title,
  items,
  handleChange,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(items[0]);

  const updateCurrent = (item: string) => {
    setCurrent(item);
    setShow(false);
    if (handleChange) {
      handleChange(item);
    }
  };

  return (
    <div className={`w-full relative ${rest.className}`}>
      <p className="text-sm mb-1">{title}</p>
      <DropdownItem onClick={() => setShow(!show)} item={current}>
        {!show ? <BiChevronDown size={20} /> : <BiChevronUp size={20} />}
      </DropdownItem>
      <div
        className={`${
          show ? "flex" : "hidden"
        } flex-col absolute z-10 bg-white t-0 w-full`}
      >
        {items.map((item) => (
          <DropdownItem
            key={item}
            onClick={() => updateCurrent(item)}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilterItem;
