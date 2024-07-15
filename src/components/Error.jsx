const Error = ({ errors }) => {
  return (
    errors && (
      <span className="block text-[13px] text-red-600">{errors.message}</span>
    )
  );
};

export default Error;
