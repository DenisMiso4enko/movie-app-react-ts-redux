import { SET_THEME } from "../actionTypes/settingsActionTypes";

export const setTheme = (theme: any) => ({
  type: SET_THEME,
  theme,
});
