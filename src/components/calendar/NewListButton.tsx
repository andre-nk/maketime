import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  IoAddOutline,
  IoBulb,
  IoClipboard,
  IoFlame,
  IoInformationCircleOutline,
  IoTime,
  IoTrophy,
} from "react-icons/io5";

export const NewListButton = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center rounded-lg px-2.5 py-1 border text-white bg-secondary-800 border-secondary-300 hover:bg-secondary-800 hover:border-secondary-500 ">
            <IoAddOutline className=" mr-2" />
            <p className="font-medium text-sm">New</p>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col space-y-2 px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-custom-white " : "text-gray-900"
                    } transition duration-200 w-full flex justify-between items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <div className="flex space-x-3 justify-between items-center">
                      <IoBulb size={16} />
                      <p>Highlight</p>
                    </div>
                    <IoInformationCircleOutline size={18} />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-custom-white " : "text-gray-900"
                    } transition duration-200 w-full flex justify-between items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <div className="flex space-x-3 justify-between items-center">
                      <IoTrophy size={16} />
                      <p>Stack Rank</p>
                    </div>
                    <IoInformationCircleOutline size={18} />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-custom-white " : "text-gray-900"
                    } transition duration-200 w-full flex justify-between items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <div className="flex space-x-3 justify-between items-center">
                      <IoFlame size={16} />
                      <p>Burner List</p>
                    </div>
                    <IoInformationCircleOutline size={18} />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-custom-white " : "text-gray-900"
                    } transition duration-200 w-full flex justify-between items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <div className="flex space-x-3 justify-between items-center">
                      <IoClipboard size={16} />
                      <p>Might-Do List</p>
                    </div>
                    <IoInformationCircleOutline size={18} />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-custom-white " : "text-gray-900"
                    } transition duration-200 w-full flex justify-between items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <div className="flex space-x-3 justify-between items-center">
                      <IoTime size={16} />
                      <p>Reflection</p>
                    </div>
                    <IoInformationCircleOutline size={18} />
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
