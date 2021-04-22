import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Container from "../layout/Container";

const Subscribe: React.FC = () => {
  return (
    <Container className="h-72 mt-40 bg-primary flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">Subscribe and Get 15% Off</p>
      <div className="w-96 flex items-center mt-6">
        <input
          type="text"
          className="w-80 h-12 px-4"
          placeholder="Your email"
        />
        <button className="w-14 h-14 -ml-8 rounded-full bg-black flex items-center justify-center">
          <BsArrowRightShort size={20} color="white" />
        </button>
      </div>
    </Container>
  );
};

export default Subscribe;
