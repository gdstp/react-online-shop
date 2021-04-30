import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="w-full mt-24 h-54 border-t flex flex-col justify-center items-center">
      <div className="flex mt-10">
        <p className="px-2">Policy</p>
        <p className="px-2">Terms</p>
        <p className="px-2">FAQS</p>
        <p className="px-2">Support</p>
      </div>

      <div className="flex font-bold mt-6">
        <p className="px-2">Facebook</p>
        <p className="px-2">Instagram</p>
        <p className="px-2">Twitter</p>
        <p className="px-2">Youtube</p>
      </div>

      <p className="uppercase text-base lg:text-xs h-12 flex items-center justify-center">
        <span className="flex items-center justify-center mr-1">
          <AiFillGithub size={16} className="mr-1" /> gdstp
        </span>
        copyright &copy; 2021
      </p>
    </div>
  );
};

export default Footer;
