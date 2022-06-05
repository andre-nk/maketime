import { Dispatch, FC, SetStateAction } from "react";
import { IoCheckmark } from "react-icons/io5";
import { CalendarFilter } from "../../const/CalendarFilter";

export const CalendarFilterChip: FC<{
  index: number;
  value: string;
  isSelected: boolean;
  activeFilter: CalendarFilter[];
  setActiveFilter: Dispatch<SetStateAction<CalendarFilter[]>>;
}> = ({ isSelected, value, index, activeFilter, setActiveFilter }) => {
  return (
    <button
      onClick={() => {
        let copiedArr: CalendarFilter[] = [...activeFilter];
        copiedArr[index] = new CalendarFilter(!isSelected, value);

        setActiveFilter(copiedArr);
      }}
    >
      <div
        className={`flex flex-wrap items-center justify-between rounded-lg px-2.5 py-1 border transition duration-300 ${
          isSelected
            ? "bg-secondary-100 border-secondary-300 hover:bg-secondary-200 hover:border-secondary-500 text-secondary-800"
            : "border-custom-gray-300 bg-white border hover:bg-gray-200"
        }`}
      >
        {isSelected && (
          <IoCheckmark className="text-secondary-800 font-bold mr-1.5" />
        )}
        <p className={`${isSelected && "font-medium"} text-sm`}>{value}</p>
      </div>
    </button>
  );
};
