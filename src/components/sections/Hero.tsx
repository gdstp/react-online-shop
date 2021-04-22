import React from "react";
import Container from "../layout/Container";

const Hero: React.FC = () => {
  return (
    <Container>
      <div className="flex justify-center items-center h-hero">
        <div className="w-1/2">
          <p className="text-primary font-medium text-4xl">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </p>
          <p className="text-gray-600 w-2/3 mt-4">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <div className="mt-4 flex items-center">
            <button className="bg-primary px-4 py-2 text-white text-sm uppercase font-medium">
              Shop now
            </button>
            <p className="text-dark font-bold ml-4 ">
              $ 109.95
              <span className="text-gray-400 ml-2 text-xs"> / $ 189.95</span>
            </p>
          </div>
        </div>
        <div className="w-80">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className="w-80"
          />
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
