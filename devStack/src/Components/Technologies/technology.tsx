import  { use, useState, Suspense } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { TechType } from "../../types/type";
import TechCard from "./TechCard";
import NoSelection from "./NoSelection";
import Selected from "./Selected";

interface TechProps {
  techPromise: Promise<TechType[]>;
}

const TechnologyContent = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  const [stack, setStack] = useState<TechType[]>([]);

  // Add Item
  const handleAddToStack = (tech: TechType) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, { position: "top-right" });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, { position: "top-right" });
  };

  // Remove Single Item
  const handleRemoveFromStack = (techId: string, techName: string) => {
    setStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`${techName} removed from stack`, { position: "top-right" });
  };

  // Remove All
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from stack!", { position: "top-right" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <ToastContainer autoClose={2000} />

      {/* Heading */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828]">
          Explore the{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* 3-Column Grid Layout (Mobile: 1, Tablet: 2, Desktop: 3) + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies?.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={stack.some((item) => item.id === tech.id)}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        {/* Your Stack Sidebar */}
        <div className="w-full lg:w-1/4 sticky top-24">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
            <p className="text-xs text-gray-400 mb-4">
              {stack.length > 0
                ? `${stack.length} Technology Selected`
                : "No technologies selected yet."}
            </p>

            {stack.length === 0 ? (
              <NoSelection />
            ) : (
              <Selected
                stack={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading State Wrapper via React Suspense
const Technology = ({ techPromise }: TechProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#E6007A] rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm font-medium">Loading Technologies...</p>
        </div>
      }
    >
      <TechnologyContent techPromise={techPromise} />
    </Suspense>
  );
};

export default Technology;