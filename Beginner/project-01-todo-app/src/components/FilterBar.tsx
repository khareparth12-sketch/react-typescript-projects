import type { Filter } from "../types/Filter";

type FilterBarProps = {
  currentFilter: Filter;
  onChange: (filter: Filter) => void;
};

function FilterBar({ currentFilter, onChange }: FilterBarProps) {
  return (
    <div>
      <button
        onClick={() => onChange("all")}
        disabled={currentFilter === "all"}
      >
        All
      </button>
      <button
        onClick={() => onChange("active")}
        disabled={currentFilter === "active"}
      >
        Active
      </button>
      <button
        onClick={() => onChange("completed")}
        disabled={currentFilter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterBar;
