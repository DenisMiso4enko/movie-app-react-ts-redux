export interface IUser {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  access?: string;
  refresh?: string;
  user?: any | null;
}

export interface IUserStore {
  user: IUser;
}
export interface IToken {
  access: string;
  refresh: string;
}
