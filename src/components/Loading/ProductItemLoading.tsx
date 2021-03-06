import React from "react";
import styled from "styled-components";

const Image = styled.div`
  width: 50%;
  height: 604px;
  background: rgba(229, 231, 235, 5);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 250px;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const ProductItemLoading: React.FC = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between h-auto">
        <Image />
        <div className="w-full lg:w-1/2 lg:px-14 flex flex-col justify-center mt-12 lg:-mt-24">
          <div className="flex flex-col">
            <p className="text-3xl font-semibold w-full h-8 bg-gray-300 animate-pulse"></p>
            <p className="mt-1 w-64 h-6 bg-gray-300 animate-pulse"></p>
          </div>

          <div className="mt-6 w-32 h-10 bg-gray-300 animate-pulse"></div>

          <div className="flex mt-8">
            <button className="w-1/2 h-12 bg-gray-300 animate-pulse py-2 text-white"></button>
            <button className="flex justify-center ml-4 items-center w-40 h-12 bg-gray-300 animate-pulse py-2 text-sm font-semibold hover:text-red-500 transition"></button>
          </div>
          <p className="mt-6 w-full h-64 bg-gray-300 animate-pulse"></p>
        </div>
      </div>
    </>
  );
};

export default ProductItemLoading;
