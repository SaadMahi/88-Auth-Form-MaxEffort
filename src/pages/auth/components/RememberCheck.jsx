const RememberCheck = ({ rememberCheck }) => {
  return (
    <div>
      <label className="group flex w-fit cursor-pointer items-center gap-1">
        <input ref={rememberCheck} type="checkbox" className="peer hidden" />
        <div className="h-4 w-4 border border-gray-300 group-hover:border-[#68A84B] peer-checked:border-[#68A84B] peer-checked:bg-[url('/checkbox.svg')] peer-checked:bg-center peer-checked:bg-no-repeat"></div>
        <span className="text-xs text-[#737373]">Remember Me</span>
      </label>
      <span className="text-xs text-[#737373]">
        (if this is a private computer)
      </span>
    </div>
  );
};

export default RememberCheck;
