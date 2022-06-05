import { SiGooglecalendar } from "react-icons/si";
import { IoCalendar, IoTimer, IoHelpCircle } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full sm:w-[100%] md:w-[60%] lg:w-[25%] overflow-clip justify-between items-center  bg-custom-white border-r">
      <div className="py-6 flex flex-col">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-[40%] self-center"
        />

        <nav className="flex flex-col mt-6 space-y-1">
          <div className="pt-2">
            <h3 className="pb-1 px-4 font-semibold text-custom-gray text-sm">
              HIGHLIGHT
            </h3>
            <a
              href=""
              className="flex items-center px-4 pl-5 py-2 text-gray-700 bg-gray-100 "
            >
              <IoCalendar size={16} />
              <span className="ml-3 text-sm font-medium">
                {" "}
                Highlight Picker{" "}
              </span>
            </a>
            <a
              href=""
              className="flex items-center px-4 pl-5 py-2 text-gray-500  hover:bg-gray-100 hover:text-gray-700"
            >
              <SiGooglecalendar />
              <span className="ml-3 text-sm font-medium">
                {" "}
                Highlight Scheduler{" "}
              </span>
            </a>
          </div>
          <div className="pt-4">
            <h3 className="pb-1 px-4 font-semibold text-custom-gray text-sm">
              LASER
            </h3>
            <a
              href=""
              className="flex items-center px-4 pl-5 py-2 text-gray-700 bg-gray-100 "
            >
              <IoTimer size={18} />
              <span className="ml-3 text-sm font-medium"> Visible Timer </span>
            </a>
            <a
              href=""
              className="flex items-center px-4 pl-5 py-2 text-gray-500  hover:bg-gray-100 hover:text-gray-700"
            >
              <IoHelpCircle size={20} />
              <span className="ml-3 text-sm font-medium">
                Trivial Questions
              </span>
            </a>
          </div>
        </nav>
      </div>

      <div className="sticky w-full border-gray-100 bg-custom-white">
        <a href="" className="flex items-center p-4 shrink-0">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://www.hyperui.dev/photos/man-4.jpeg"
            alt="Simon Lewis"
          />

          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">Simon Lewis</strong>

              <span> simonlewis@fakemail.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
