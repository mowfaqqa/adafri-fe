import { StatusFilter } from "@/utils/interface";

interface CampaignFiltersProps {
  filters: {
    status: StatusFilter;
    startDate: string;
    endDate: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export function CampaignFilters({ filters, onFilterChange }: CampaignFiltersProps) {
  return (
    <div className="mb-4 flex flex-col md:flex-row text-sm gap-6 items-start md:items-center">
      <div className="w-full md:w-auto">
        <label className="font-semibold block mb-1">Filter by Status:</label>
        <select
          className="border p-2 text-sm rounded w-full md:w-auto"
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="w-full md:w-auto">
        <label className="font-semibold text-sm block mb-1">Start Date:</label>
        <input
          type="date"
          className="border p-2 text-sm rounded w-full"
          value={filters.startDate}
          onChange={(e) => onFilterChange('startDate', e.target.value)}
        />
      </div>

      <div className="w-full md:w-auto">
        <label className="font-semibold text-sm block mb-1">End Date:</label>
        <input
          type="date"
          className="border p-2 text-sm rounded w-full"
          value={filters.endDate}
          onChange={(e) => onFilterChange('endDate', e.target.value)}
        />
      </div>
    </div>
  );
}