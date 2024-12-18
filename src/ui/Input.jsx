import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";

const Input = ({
  placeholder,
  register,
  name,
  validationRules,
  error,
  type = "text",
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative w-full">
      <div>
        <label
          htmlFor={placeholder}
          className="mb-[3px] block px-[10px] text-start"
        >
          {placeholder} {error && <span className="text-red-500"> *</span>}
        </label>
        <div className="relative">
          <input
            {...register(name, validationRules)}
            disabled={disabled}
            type={showPassword && type === "password" ? "text" : type}
            placeholder={placeholder}
            className={`form-input ${error ? "border-red-500" : ""}`}
            id={placeholder}
          />

          {type === "password" && (
            <button
              type="button"
              className="text-gray absolute top-[50%] translate-y-[-50%] ltr:right-[10px] rtl:left-[10px]"
              onClick={toggleShowPassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-[3px] p-[2px] text-start text-sm text-red-400">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
