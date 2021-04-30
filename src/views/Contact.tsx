import ContactMap from "components/sections/partials/ContactMap";
import SectionHeader from "components/sections/SectionHeader";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <SectionHeader text="Contact" />
      <div className="flex flex-col mt-14">
        <p className="w-2/3 m-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
          luctus eget eu est.
        </p>

        <div className="w-full flex lg:flex-row flex-col justify-between mt-14">
          <div className="w-full lg:w-1/3 h-40 border border-black flex flex-col justify-center items-center px-10">
            <span className="text-xs text-gray-400">Address</span>
            <p className="font-bold text-center mt-4">
              27 W 24th St, <br /> New York, NY 10010, USA
            </p>
          </div>

          <div className="w-full lg:w-1/3 lg:ml-6 h-40 border border-black flex flex-col justify-center items-center px-10">
            <span className="text-xs text-gray-400">Call-center</span>
            <p className="font-bold text-center mt-4">+1 212-121-2121</p>
          </div>

          <div className="w-full lg:w-1/3 lg:ml-6 h-40 border border-black flex flex-col justify-center items-center px-10">
            <span className="text-xs text-gray-400">Email</span>
            <p className="font-bold text-center mt-4">sales@shop.com</p>
          </div>
        </div>
        <ContactMap />
      </div>
    </div>
  );
};

export default Contact;
