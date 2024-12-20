const Textarea = ({
  placeholder,
  register,
  name,
  validationRules,
  error,
  disabled,
}) => {
  return (
    <div className="relative w-full">
      <div>
        <label
          htmlFor={placeholder}
          className="mb-[3px] block px-[10px] text-start"
        >
          {placeholder} {error && <span className="text-red-500"> *</span>}
        </label>
        <div>
          <textarea
            {...register(name, validationRules)}
            disabled={disabled}
            placeholder={placeholder}
            className={`form-input resize-none ${error ? "border-red-500" : ""}`}
            id={placeholder}
          />
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

export default Textarea;
