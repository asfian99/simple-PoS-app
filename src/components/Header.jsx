import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1 className="font-bold text-2xl text-center">Point of Sales</h1>
      <div className="my-2 mx-auto text-center font-medium border rounded">
        <Link
          to="/"
          className="mx-3 px-2 py-1 text-gray-500 hover:text-indigo-500"
        >
          Home
        </Link>
        <Link
          to="/history"
          className="mx-3 px-2 py-1 text-gray-500 hover:text-indigo-500"
        >
          History
        </Link>
      </div>
    </>
  );
};
export default Header;
