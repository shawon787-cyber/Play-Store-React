
import { NavLink } from 'react-router';
import logo from '../../../assets/images/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <nav className='flex justify-between items-center p-2 container mx-auto'>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    Hero.io
                </h2>
            <ul className='flex justify-between gap-4 items-center'>
                <li><NavLink to={"/"}  className={({ isActive }) =>`px-4 py-2 rounded ${isActive ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-700"}`}>Home</NavLink></li>
                <li><NavLink to={"/apps"} className={({ isActive }) =>`px-4 py-2 rounded ${isActive ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-700"}`}>Apps</NavLink></li>
                <li><NavLink to={"/installedApps"} className={({ isActive }) =>`px-4 py-2 rounded ${isActive ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-700"}`}>Installation</NavLink></li>
            </ul>
            <button className='btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center gap-2'>
  <FaGithub />
  <span>Contribute</span>
</button>
        </nav>
        </div>
    );
};

export default Navbar;