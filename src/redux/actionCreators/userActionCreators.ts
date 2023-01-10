import { takeEvery, put, take } from "redux-saga/effects";
import {
  ACTIVATE,
  GET_USER,
  LOG_OUT,
  SET_USER,
  SIGN_IN,
  SIGN_UP,
} from "../actionTypes/userActionTypes";
import { IToken, IUser } from "../../models/UserModel";

export function* watcherUserCreate() {
  yield takeEvery(SIGN_UP, fetchSignUp);
  yield takeEvery(ACTIVATE, fetchActivate);
  yield takeEvery(SIGN_IN, fetchSignIn);
  yield takeEvery(GET_USER, fetchGetUser);
}

export const signUp = (userInfo: IUser) => ({
  type: SIGN_UP,
  userInfo,
});
export const activation = (activationInfo: any, navigate: any) => ({
  type: ACTIVATE,
  activationInfo,
  navigate,
});
export const signIn = (userInfo: IUser, navigate: any) => ({
  type: SIGN_IN,
  userInfo,
  navigate,
});
export const setUser = (user: IUser) => ({
  type: SET_USER,
  user,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const getUser = () => ({
  type: GET_USER,
});

export function* fetchSignUp(action: any) {
  console.log(action);
  const { userInfo } = action;
  console.log(userInfo);
  const data: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/users/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }
  );
  const response: IUser = yield data.json();
  console.log(response);
  alert("Форма отправлена");
}

export function* fetchActivate(action: any) {
  const { activationInfo, navigate } = action;
  const data: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/users/activation/",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(activationInfo),
    }
  );
  if (data.status < 300) {
    navigate("/success");
  } else {
    console.log("error");
  }
  console.log(action);
}
export function* fetchSignIn(action: any) {
  const { userInfo, navigate } = action;
  const data: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/jwt/create/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }
  );

  if (data.status < 300) {
    const response: { refresh: string; access: string } = yield data.json();
    const { refresh, access } = response;
    localStorage.setItem("jwtAccess", access);
    localStorage.setItem("jwtRefresh", refresh);
    yield fetchGetUser();
    navigate("/");
  } else {
    alert("не удалось войти, проверьте данные");
    console.log("error");
  }
}
function* fetchGetUser() {
  const token: string = yield getToken();
  if (token) {
    const data: Response = yield fetch(
      "https://studapi.teachmeskills.by/auth/users/me/",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const user: IUser = yield data.json();
    // console.log(user);
    yield put(setUser(user));
  }
}
function* getToken() {
  const token = localStorage.getItem("jwtAccess");
  if (token !== "undefined") {
    const resp: Response = yield fetch(
      `https://studapi.teachmeskills.by/auth/jwt/verify/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }
    );
    if (resp.status === 200) {
      return token;
    } else {
      const refreshToken = localStorage.getItem("jwtRefresh");
      const newToken: Response = yield fetch(
        "https://studapi.teachmeskills.by/auth/jwt/refresh/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );
      const data: IToken = yield newToken.json();
      const { access } = data;

      localStorage.setItem("jwtAccess", access);
      return access;
    }
  }
  return "";
}
