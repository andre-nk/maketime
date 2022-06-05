import { Dispatch, FC, SetStateAction } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { CalendarFilter } from "../../const/CalendarFilter";
import { CalendarFilterChip } from "./CalendarFilterChip";
import { NewListButton } from "./NewListButton";

export const CalendarHeader: FC<{
  activeFilter: CalendarFilter[];
  setActiveFilter: Dispatch<SetStateAction<CalendarFilter[]>>;
}> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-300 pb-5">
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
      <div className="flex flex-col space-y-1 justify-between items-end">
        <div className="flex justify-end items-center space-x-4">
          <button>
            <IoChevronBack size={20} className="text-custom-gray" />
          </button>
          <p className="text-custom-black font-semibold text-md">Today</p>
          <button>
            <IoChevronForward size={20} className="text-custom-gray" />
          </button>
        </div>
        <NewListButton />
      </div>
    </div>
  );
};
