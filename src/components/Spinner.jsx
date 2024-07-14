const Spinner = () => {
  return (
    <div className="flex h-[calc(100vh-6px)] items-center justify-center space-x-2 bg-white dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.3s]" />
      <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.15s]" />
      <div className="h-8 w-8 animate-bounce rounded-full bg-black" />
    </div>
  );
};

export default Spinner;
