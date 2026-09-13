
import Logo from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    // Sticky Top Navbar Container
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 grid grid-cols-3 lg:flex items-center justify-between">
        
        {/* Left: Hamburger Icon (Mobile) */}
        <div className="flex items-center lg:hidden justify-start">
          <div className="dropdown">
            <div role="button" className="btn btn-ghost btn-circle text-gray-700 -ml-2">
              <GiHamburgerMenu className="text-xl" />
            </div>
            {/* Mobile Dropdown Menu */}
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 text-gray-600 font-medium">
              <li className="text-[#E6007A] font-semibold">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Center (Mobile) / Left (Desktop): Brand Logo */}
        <div className="flex items-center justify-center lg:justify-center">
          <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto cursor-pointer" />
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-500 cursor-pointer">
            <li className="text-[#E6007A] font-semibold">Home</li>
            <li className="hover:text-gray-900 transition-colors">Technologies</li>
            <li className="hover:text-gray-900 transition-colors">Projects</li>
            <li className="hover:text-gray-900 transition-colors">About</li>
            <li className="hover:text-gray-900 transition-colors">Contact</li>
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <button className="btn btn-ghost btn-sm sm:btn-md font-medium text-gray-700 hover:bg-transparent hover:text-gray-900 px-2 sm:px-4">
            Sign In
          </button>
          <button className="btn btn-sm sm:btn-md rounded-full bg-[#E6007A] hover:bg-[#c40068] text-white border-none px-4 sm:px-6 font-medium">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;