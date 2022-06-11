import { useContext } from "react";
import { ListDialogContext } from "../context/ListDialogContext";

export const useListDialogContext = () => {
  const context = useContext(ListDialogContext);

  console.log(context.state);

  if (context === undefined) {
    throw new Error(
      "useListDialogContext() must be used inside the ListDialogProvider"
    );
  }

  return context;
};
