const Header = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img className="w-[200px]" src="/logoBig.png" alt="The MaxEffort Logo" />
      <h3 className="text-2xl font-extralight text-gray-500">{title}</h3>
    </div>
  );
};

export default Header;
