import { ReactElement, useEffect, useState } from "react";
import Calendar from "../components/calendar/Calendar";
import { CalendarHeader } from "../components/calendar/CalendarHeader";

import { IntroDialog1 } from "../components/intro/IntroDialog1";
import { IntroDialog2 } from "../components/intro/IntroDialog2";
import { IntroDialog3 } from "../components/intro/IntroDialog3";
import { Sidebar } from "../components/navigation/Sidebar";
import { CalendarFilter } from "../const/CalendarFilter";
import { WelcomeDialogs } from "../const/WelcomeDialogs";

function App(): ReactElement {
  let [activeDialog, setActiveDialog] = useState(WelcomeDialogs.None);

  const [activeFilter, setActiveFilter] = useState([
    new CalendarFilter(false, "Stack"),
    new CalendarFilter(false, "Might-Do List"),
    new CalendarFilter(false, "Burner List"),
    new CalendarFilter(false, "Reflection"),
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("isOnboardingCompleted");
      console.log(item);

      if (item === null || (item && item !== "true")) {
        console.log(item);
        setNextDialog(WelcomeDialogs.Intro1);
      }
    }

    checkUserData();
    return () => {
      checkUserData();
    };
  }, []);

  function setNextDialog(dialog: WelcomeDialogs) {
    if (dialog == WelcomeDialogs.None) {
      localStorage.setItem("isOnboardingCompleted", "true");
    }

    setActiveDialog(dialog);
  }

  return (
    <div className="flex justify-end w-full h-[100%]">
      <div className="fixed w-[17.5%] h-full top-0 left-0">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full flex flex-col justify-start py-8 pr-[5%] pl-[2.5%]">
        <CalendarHeader
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div className="z-0 py-10 w-full">
          <Calendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
