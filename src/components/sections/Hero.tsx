import React from "react";
import Container from "../layout/Container";
import { AiOutlineLine } from "react-icons/ai";

const Hero: React.FC = () => {
  return (
    <Container>
      <div className="h-hero flex flex-col">
        <div className="flex flex-col justify-center items-center bg-gray-200 h-5/6">
          <p className="text-5xl font-semibold text-white">New collection</p>
          <button className="px-4 py-2 mt-20 bg-white text-black text-lg font-semibold">
            Shop Now
          </button>
        </div>
        <div className="w-54 flex items-center justify-between mx-auto mt-4">
          <AiOutlineLine size={48} />
          <AiOutlineLine size={48} className="text-gray-200" />
          <AiOutlineLine size={48} className="text-gray-200" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

/**
 * {
 * "id":1,
 * "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
 * "price":109.95,
 * "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
 * "category":"men's clothing",
 * "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
 */
