import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid: Mobile view uses flex-col & text-center | Desktop uses grid & text-left */}
        <div className="flex flex-col md:grid md:grid-cols-5 items-center md:items-start text-center md:text-left gap-8 md:gap-10 pb-12">
          
          {/* Brand Block */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            {/* Social Links (Separated by dots on mobile matching the UI) */}
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4 text-gray-500 text-sm font-medium pt-2">
              <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links (Hidden on mobile if following strict UI image, or kept centered) */}
          <div className="hidden md:block">
            <h4 className="text-sm font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="hover:text-gray-900 cursor-pointer">Home</li>
              <li className="hover:text-gray-900 cursor-pointer">Technologies</li>
              <li className="hover:text-gray-900 cursor-pointer">Projects</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="hidden md:block">
            <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="hover:text-gray-900 cursor-pointer">About</li>
              <li className="hover:text-gray-900 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="hidden md:block">
            <h4 className="text-sm font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gray-900 cursor-pointer">Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;