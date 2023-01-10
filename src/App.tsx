import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import OneMovie from "./components/OneMovie/OneMovie";
import SearchResult from "./components/SearchResult/SearchResult";
import Trends from "./components/Trends/Trends";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "./models/StoreModel";
import FormAuth from "./components/Forms/FormAuth";
import FormReg from "./components/Forms/FormReg";
import { useEffect } from "react";
import { getUser } from "./redux/actionCreators/userActionCreators";
import Success from "./components/Success/Success";
import Activate from "./components/Activate/Activate";
import Settings from "./components/Settings/Settings";

function App() {
  const { theme } = useSelector((state: IStore) => state.settings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className={`App App--${theme}`}>
      <BrowserRouter>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="trends" element={<Trends />} />
              <Route path="search" element={<SearchResult />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="sign-in" element={<FormAuth />} />
              <Route path="sign-up" element={<FormReg />} />
              <Route path="success" element={<Success />} />
              <Route path="settings" element={<Settings />} />
              <Route path="activate">
                <Route path="*" element={<Activate />} />
              </Route>
              <Route path="movie/:id" element={<OneMovie />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
