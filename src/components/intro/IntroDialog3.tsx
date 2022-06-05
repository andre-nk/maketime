import { Fragment, FC } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { WelcomeDialogs } from "../../const/WelcomeDialogs";

export const IntroDialog3: FC<{
  isOpen: boolean;
  next: Function;
}> = ({ isOpen, next }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => next(WelcomeDialogs.None)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-custom-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="w-full bg-custom-white p-6 flex space-x-4 justify-center">
                  <img src="/assets/intro3a.png" alt="" className="h-56" />
                  <img src="/assets/intro3b.png" alt="" className="h-56" />
                </div>
                <div className="flex space-x-6 p-6 items-center justify-between">
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-[1.4rem] font-bold">
                      But, before that...
                    </h2>
                    <p className="text-md flex-wrap">
                      The creator highly recommends that you should read the
                      official Make Time book to understand these tactics and
                      maximize them. Get the book{" "}
                      <a href="/" className="underline">
                        here!
                      </a>
                    </p>
                  </div>
                  <button onClick={() => next(WelcomeDialogs.None)}>
                    <IoChevronForwardCircleOutline
                      size={28}
                      className="text-custom-gray-300"
                    />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
