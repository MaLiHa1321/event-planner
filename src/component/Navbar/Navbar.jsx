import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    const navLink = <>

    <NavLink className="mr-3 text-xl" to="/" >Home</NavLink>
      <NavLink className="mr-3 text-xl" to="/event" >Event</NavLink>
      <NavLink className="mr-3 text-xl" to="/categore" >Services</NavLink>
      <NavLink className="mr-3 text-xl" to="/about" >About us</NavLink>
      <NavLink className="mr-3 text-xl" to="/login" >Login</NavLink>
      <NavLink className="mr-3 text-xl" to="/register" >Register</NavLink>


    </>
   
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-sm lg:text-2xl font-bold text-red-400">Event.Planner</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;