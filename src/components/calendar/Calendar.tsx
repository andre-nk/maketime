import { Dispatch, FC, SetStateAction } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isWeekend,
  isSameDay,
  parse,
} from "date-fns";
import "./Calendar.css";
import { IoAdd } from "react-icons/io5";

const Calendar: FC<{
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}> = ({ currentDate, setSelectedDate }) => {
  const days = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentDate, {
      weekStartsOn: 1,
    });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="flex justify-center text-xs text-custom-gray-300 py-1"
          key={i}
        >
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="w-full grid grid-cols-7 grid-flow-row">{days}</div>;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, {
      weekStartsOn: 1,
    });
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`flex group pr-3 pt-2 text-sm font-medium border-[0.5px] border-custom-gray-500 h-32 ${
              !isSameMonth(day, monthStart)
                ? "text-custom-gray-300 font-normal justify-end"
                : "justify-between"
            } ${isWeekend(day) && "bg-custom-white"}`}
            key={day.toISOString()}
            onClick={() => onDateClick(parse("EEEE", "", cloneDay))}
          >
            {isSameMonth(day, monthStart) && (
              <div className="opacity-0 group-hover:opacity-100 hover:bg-custom-white ml-2 shadow-lg p-1 border rounded-lg h-fit duration-200 transition">
                <IoAdd size={16} />
              </div>
            )}
            <p
              className={
                isSameDay(cloneDay, new Date())
                  ? `rounded-full bg-custom-red text-white flex justify-center items-center text-xs h-[1.5rem] w-[1.5rem]`
                  : ``
              }
            >
              {formattedDate}
            </p>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 grid-flow-row" key={day.toISOString()}>
          {" "}
          {days}{" "}
        </div>
      );
      days = [];
    }
    return <div className="w-full border border-custom-gray-500">{rows}</div>;
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">{days()}</div>
      <div className="w-full">{cells()}</div>
    </div>
  );
};

export default Calendar;
