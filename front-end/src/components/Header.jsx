import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-8 items-center p-4 bg-gray-100">
      <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          className="w-48 hover:cursor-pointer"
          src="https://broadwayinfosys.com/uploads/logo/1761457465_63567.svg"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-62 ">
          <search>
            <input
              className="w-full p-2 rounded-md hover:outline-0 border"
              type="text"
              placeholder="Search course..."
            />
          </search>
        </div>
        <button className="py-2 w-24 rounded-md text-white hover:bg-blue-700 bg-blue-500">
          Search
        </button>
      </div>
      <div className="flex justify-center items-center gap-6">
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>Login button</div>
    </div>
  );
};

export default Header;
