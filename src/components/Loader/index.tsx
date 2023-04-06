const Loader: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </>
  );
};

export default Loader;
