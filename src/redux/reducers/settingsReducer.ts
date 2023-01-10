export interface ISettingsStore {
  theme: ITheme;
}

export interface ITheme {
  theme: "light" | "dark";
}

const initialState: ITheme = {
  theme: "light",
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_THEME": {
      const { theme } = action;
      return {
        ...state,
        theme,
      };
    }
    default:
      return state;
  }
};
