import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Container from "../layout/Container";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    if (email.length <= 0) {
      return setError(true);
    }
    setSuccess(true);
  };

  return (
    <Container className="w-full h-72 mt-40 bg-primary flex flex-col justify-center items-center">
      {!success ? (
        <>
          <p className="text-xl lg:text-4xl font-bold">
            Subscribe and Get 15% Off
          </p>
          <div className="w-64 lg:w-96 flex items-center mt-6">
            <input
              type="text"
              className="w-80 h-12 px-4"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-20 lg:w-14 h-14 -ml-8 rounded-full bg-black flex items-center justify-center"
              onClick={() => handleClick()}
            >
              <BsArrowRightShort size={20} color="white" />
            </button>
          </div>
          {error && <p className="-ml-10 text-sm">Please provide a email.</p>}
        </>
      ) : (
        <>
          <p className="text-center text-xl lg:text-2xl">
            <strong>Thanks for subscribing!</strong> <br /> check your e-mail
            for more information.
          </p>
        </>
      )}
    </Container>
  );
};

export default Subscribe;
