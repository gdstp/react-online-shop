import React from "react";
import MaskedInput from "react-input-mask";

const Input: React.FC<{
  label: string;
  register: any;
  required: boolean;
  errors: any;
  mask?: string;
  type?: string;
}> = ({ label, register, required, errors, mask, type }) => {
  return (
    <div className="w-full flex flex-col">
      <label>{label}</label>
      <input
        type={type ? type : "text"}
        mask={mask && mask}
        {...register(label, { required })}
        className="w-full lg:w-4/5 h-12 px-2 border border-gray-200"
      />
      {errors[label] && (
        <p className="text-red-500">Please enter your {label} </p>
      )}
    </div>
  );
};

export default Input;
