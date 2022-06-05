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
}> = ({
  activeFilter,
  setActiveFilter,
  currentDate,
  setCurrentDate,
  selectedDate,
  setSelectedDate,
}) => {
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
    <div className="flex justify-between items-center w-full border-b border-gray-300 pb-5">
      <div className="w-full flex flex-col justify-between space-y-3 items-start">
        <h2 className="text-3xl font-bold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <div className="flex justify-start space-x-4 items-center pt-2">
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
      <div className="flex flex-col justify-start items-end space-y-3">
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
        <NewListButton />
      </div>
    </div>
  );
};
