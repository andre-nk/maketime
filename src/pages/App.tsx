import { ReactElement, useEffect, useState } from "react";

import { IntroDialog1 } from "../components/intro/IntroDialog1";
import { IntroDialog2 } from "../components/intro/IntroDialog2";
import { IntroDialog3 } from "../components/intro/IntroDialog3";
import { Sidebar } from "../components/navigation/Sidebar";
import { WelcomeDialogs } from "../const/WelcomeDialogs";

function App(): ReactElement {
  let [activeDialog, setActiveDialog] = useState(WelcomeDialogs.None);

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
    <div className="w-full h-full flex flex-col justify-start">
      <div>
        <IntroDialog1
          isOpen={activeDialog == WelcomeDialogs.Intro1}
          next={setNextDialog}
        />
        <IntroDialog2
          isOpen={activeDialog == WelcomeDialogs.Intro2}
          next={setNextDialog}
        />
        <IntroDialog3
          isOpen={activeDialog == WelcomeDialogs.Intro3}
          next={setNextDialog}
        />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
