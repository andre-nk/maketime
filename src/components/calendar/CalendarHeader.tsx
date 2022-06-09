import { addMonths, format, subMonths } from "date-fns";
import { Dispatch, FC, SetStateAction } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { CalendarFilter } from "../../const/CalendarFilter";
import { CalendarFilterChip } from "./CalendarFilterChip";
import { NewListButton } from "./NewListButton";

export const CalendarHeader: FC<{
  activeFilter: CalendarFilter[];
  setActiveFilter: Dispatch<SetStateAction<CalendarFilter[]>>;
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}> = ({ activeFilter, setActiveFilter, currentDate, setCurrentDate }) => {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const presentMonth = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="w-full  flex flex-col justify-between items-center space-y-5 border-b border-gray-300 pb-5">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <div className="flex justify-end items-center pt-3">
          <button
            onClick={() => prevMonth()}
            className="bg-white hover:bg-custom-white transition duration-200 px-1.5 py-1.5 rounded-md"
          >
            <IoChevronBack size={20} className="text-custom-gray-300" />
          </button>
          <button
            onClick={() => presentMonth()}
            className="bg-white hover:bg-custom-white transition duration-200 px-3 py-1.5 rounded-md"
          >
            <p className="text-custom-black font-medium text-sm">Today</p>
          </button>
          <button
            onClick={() => nextMonth()}
            className="bg-white hover:bg-custom-white transition duration-200 px-1.5 py-1.5 rounded-md"
          >
            <IoChevronForward size={20} className="text-custom-gray-300" />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start space-x-4 items-center">
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
        <NewListButton />
      </div>
    </div>
  );
};
