import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Bg from "assets/imgs/completed-payment.png";

const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 708px;
  padding: 100px;
  background: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CheckoutCompleted: React.FC = () => {
  return (
    <Image image={Bg}>
      <div className="flex items-center flex-col text-4xl font-semibold">
        <p>Thanks!</p>
        <p>Your order is complete.</p>
        <span className="text-base font-normal mt-6">
          We sent a confirmation to your email.
        </span>
      </div>

      <Link to="/">
        <div className="w-56 h-12 bg-black flex items-center justify-center text-white">
          Home Page
        </div>
      </Link>
    </Image>
  );
};

export default CheckoutCompleted;
