import React from "react";

const Container: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return <div className={`${className} w-2/3 mx-auto`}>{children}</div>;
};

export default Container;
