import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers/moviesActionReducer";
import { watcherMovies } from "./actionCreators/moviesActionCreators";
import { settingsReducer } from "./reducers/settingsReducer";
import { userReducer } from "./reducers/userReducer";
import { watcherUserCreate } from "./actionCreators/userActionCreators";

function* rootSaga() {
  yield all([watcherMovies(), watcherUserCreate()]);
}

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  movies: moviesReducer,
  settings: settingsReducer,
  user: userReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);
