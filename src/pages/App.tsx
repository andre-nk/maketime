import { ReactElement, useState } from "react";
import { IntroDialog } from "../components/intro_dialog";
import { Navbar } from "../components/navbar";

function App(): ReactElement {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full h-full flex flex-col justify-start">
      <IntroDialog isOpen={isOpen} closeModal={closeModal} />
      <Navbar openModal={openModal} />
    </div>
  );
}

export default App;
