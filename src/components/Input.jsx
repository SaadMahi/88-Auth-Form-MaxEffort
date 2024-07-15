const Input = ({ errors, register, placeholder, name, type, validation }) => {
  return (
    <input
      className={`h-8 w-full rounded ${errors[name] ? "border-red-600" : "border-[#e4e5e7]"} border px-3 placeholder:text-sm placeholder:text-[#A2A2A2] focus:outline-none`}
      placeholder={placeholder}
      type={type}
      name={name}
      autoComplete={type === "password" ? "current-password" : "email"}
      {...register(name, validation)}
    />
  );
};

export default Input;
