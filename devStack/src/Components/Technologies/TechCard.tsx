import type { TechType } from "../../types/type";

interface TechCardProps {
  tech: TechType;
  isAdded: boolean;
  onAddToStack: (tech: TechType) => void;
}

const TechCard = ({ tech, isAdded, onAddToStack }: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-7 h-7 object-contain"
            />
          </div>
          {tech.badge && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-gray-100 rounded-md font-medium text-gray-600">
              {tech.category}
            </span>
            <span className="text-gray-400">{tech.difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <span className="text-amber-400">★</span> {tech.rating}
          </div>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
            isAdded
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed"
              : "bg-[#0B132B] hover:bg-[#1C2541] text-white shadow-sm active:scale-[0.99]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
