type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Open = "OPEN",
  Close = "CLOSE",
}

export type ListDialogType = {
  jsonData: string | null;
};

type ListDialogPayload = {
  [Types.Open]: ListDialogType;
  [Types.Close]: ListDialogType;
};

export type ListDialogActions =
  ActionMap<ListDialogPayload>[keyof ActionMap<ListDialogPayload>];

export const listDialogReducer = (
  state: ListDialogType,
  action: ListDialogActions
) => {
  switch (action.type) {
    case Types.Open:
      return action.payload;
    case Types.Close:
      return action.payload;
    default:
      return state;
  }
};
