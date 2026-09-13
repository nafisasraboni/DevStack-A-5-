import Logo from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    // Sticky Top Navbar Container
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Left: Hamburger Icon */}
        <div className="lg:hidden flex-1 flex justify-start">
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

        {/* Logo: Mobile (Center) & Desktop (Left) */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto cursor-pointer object-contain" />
        </div>

        {/* Desktop Center: Nav Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-500 cursor-pointer">
            <li className="text-[#E6007A] font-semibold">Home</li>
            <li className="hover:text-gray-900 transition-colors">Technologies</li>
            <li className="hover:text-gray-900 transition-colors">Projects</li>
            <li className="hover:text-gray-900 transition-colors">About</li>
            <li className="hover:text-gray-900 transition-colors">Contact</li>
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex-1 lg:flex-none flex items-center justify-end gap-1 sm:gap-3">
          <button className="btn btn-ghost btn-xs sm:btn-md font-medium text-gray-700 hover:bg-transparent hover:text-gray-900 px-1 sm:px-4">
            Sign In
          </button>
          <button className="btn btn-xs sm:btn-md rounded-full bg-[#E6007A] hover:bg-[#c40068] text-white border-none px-3 sm:px-6 font-medium">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;