import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-blue-500">
        🍔 FoodApp
      </h1>

      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/plates"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-600"
          }
        >
          Plates
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;