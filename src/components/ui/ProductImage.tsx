import React from "react";
import styled from "styled-components";

const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ProductImage: React.FC<Partial<HTMLDivElement> & { image: string }> = ({
  image,
  ...rest
}) => {
  return <Image image={image} className={`${rest.className}`} />;
};

export default ProductImage;
