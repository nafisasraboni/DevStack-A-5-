import type { TechType } from "../../types/type";

interface SelectedProps {
  stack: TechType[];
  onRemoveFromStack: (techId: string, techName: string) => void;
  onRemoveAll: () => void;
}

const Selected = ({ stack, onRemoveFromStack, onRemoveAll }: SelectedProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 max-h-[380px] overflow-y-auto pr-1">
        {stack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
              <div>
                <p className="text-sm font-bold text-gray-800 leading-none">{item.name}</p>
                <span className="text-[11px] text-gray-400 font-medium">{item.category}</span>
              </div>
            </div>
            <button
              onClick={() => onRemoveFromStack(item.id, item.name)}
              className="text-gray-400 hover:text-red-500 p-1 text-sm font-bold transition-colors"
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onRemoveAll}
        className="w-full py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold transition-colors"
      >
        Remove All
      </button>
    </div>
  );
};

export default Selected;