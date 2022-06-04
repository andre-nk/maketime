import { Dispatch, FC, SetStateAction } from "react";
import { IoAddOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";

import { CalendarFilter } from "../../const/CalendarFilter";
import { CalendarFilterChip } from "./CalendarFilterChip";

export const CalendarHeader: FC<{
  activeFilter: CalendarFilter[];
  setActiveFilter: Dispatch<SetStateAction<CalendarFilter[]>>;
}> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-300 pb-6">
      <div className="w-full flex flex-col justify-between items-start">
        <h2 className="text-3xl font-bold">June 2022</h2>
        <div className="flex justify-start space-x-4 items-center mt-4">
          {activeFilter.map((calendarFilter: CalendarFilter, index: number) => {
            return (
              <CalendarFilterChip
                index={index}
                value={calendarFilter.value}
                isSelected={calendarFilter.isActive}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              ></CalendarFilterChip>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-end items-center space-x-4">
          <button>
            <IoChevronBack size={20} className="text-custom-gray" />
          </button>
          <p className="text-custom-black font-semibold text-md">Today</p>
          <button>
            <IoChevronForward size={20} className="text-custom-gray" />
          </button>
        </div>
        <button className="flex items-center rounded-lg px-2.5 py-1 mt-5 border bg-secondary-800 border-secondary-300 hover:bg-secondary-800 hover:border-secondary-500 text-white">
          <IoAddOutline className="text-white mr-2" />
          <p className="font-medium text-sm">New</p>
        </button>
      </div>
    </div>
  );
};
