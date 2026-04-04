import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-10 py-4 flex justify-between items-center sticky top-0 z-50">
      
      <h1 className="text-2xl font-bold text-orange-600">
        FoodAdvisor
      </h1>

      <div className="flex gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plates">Plates</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>

      <button className="bg-orange-600 text-white px-5 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
}

export default Navbar;