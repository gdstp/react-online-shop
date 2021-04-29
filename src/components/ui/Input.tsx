import React from "react";

const Input: React.FC<{
  label: string;
  register: any;
  required: boolean;
  errors: any;
}> = ({ label, register, required, errors }) => {
  return (
    <div className="w-full flex flex-col">
      <label>{label}</label>
      <input
        {...register(label, { required })}
        className="w-4/5 h-12 px-2 border border-gray-200"
      />
      {errors[label] && (
        <p className="text-red-500">Please enter your {label} </p>
      )}
    </div>
  );
};

export default Input;
