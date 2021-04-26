import React from "react";
import { Link } from "react-router-dom";

const MenuItem: React.FC<{ text: string; to: string }> = ({ text, to }) => {
  return (
    <p className="px-4 hover:text-primary delay-75 cursor-pointer">
      <Link to={to}>{text}</Link>
    </p>
  );
};

export default MenuItem;
