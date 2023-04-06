import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! Looks like the page you are trying to access does not exist.
      </p>
      <Link
        to="/"
        className="inline-block py-2 px-4 text-lg font-medium text-white bg-indigo-500 rounded-full hover:bg-indigo-600 transition-colors"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
