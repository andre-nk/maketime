import React, { createContext, useReducer, Dispatch } from "react";
import {
  ListDialogType,
  listDialogReducer as listDialogReducer,
  ListDialogActions,
} from "../reducers/ListDialogReducers";

const initialState: ListDialogType = {
  jsonData: null,
};

const ListDialogContext = createContext<{
  state: ListDialogType;
  dispatch: Dispatch<ListDialogActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ListDialogProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(listDialogReducer, initialState);

  return (
    <ListDialogContext.Provider value={{ state, dispatch }}>
      {children}
    </ListDialogContext.Provider>
  );
};

export { ListDialogProvider, ListDialogContext };
