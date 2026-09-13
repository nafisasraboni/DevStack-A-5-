
import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white py-10 md:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#101828]">
            Build Your Ideal <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF5C00] via-[#E6007A] to-[#9E00FF] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
            <button className="px-5 sm:px-6 py-3 rounded-xl text-white text-sm sm:text-base font-medium bg-gradient-to-r from-[#FF5C00] via-[#E6007A] to-[#E6007A] hover:opacity-95 transition-opacity shadow-sm">
              Explore Technologies
            </button>

            <button className="px-5 sm:px-6 py-3 rounded-xl text-gray-700 text-sm sm:text-base font-medium bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <img
            src={bannerImg}
            alt="Development Stack Banner"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
