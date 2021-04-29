import SectionHeader from "components/sections/SectionHeader";
import Subscribe from "components/sections/Subscribe";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <SectionHeader text="About" />
      <div className="flex flex-col mt-14">
        <p className="w-2/3 m-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
          luctus eget eu est.
        </p>
        <div className="w-full mt-14 flex justify-between">
          <div className="w-1/2 h-104 bg-gray-200"></div>
          <div className="w-1/2 h-104 px-24 text-center flex flex-col justify-center items-center">
            <div className="w-8 h-8 mb-4 bg-primary rounded-full"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
};

export default About;
