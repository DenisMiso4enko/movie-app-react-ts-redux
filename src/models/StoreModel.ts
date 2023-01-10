import { IMovieState } from "../redux/reducers/moviesActionReducer";
import { ISettingsStore } from "../redux/reducers/settingsReducer";
import { IUser } from "./UserModel";

export interface IStore {
  movies: IMovieState;
  settings: ISettingsStore;
  user: IUser;
}
