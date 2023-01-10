import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../models/StoreModel";
import { setTheme } from "../../redux/actionCreators/settingsActionTypes";
import { RiHome6Fill } from "react-icons/ri";
import { SiHotjar } from "react-icons/si";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

const Menu = () => {
  const { theme } = useSelector((state: IStore) => state.settings);
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    // @ts-ignore
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <div className="menu">
      <div className="menu-container">
        <nav className="menu-list">
          <h1>
            <Link to="/">
              pix<span className="logo-color">ema</span>
            </Link>
          </h1>
          <NavLink to="/" className="menu-item">
            <RiHome6Fill /> Home
          </NavLink>
          <NavLink to="/trends" className="menu-item">
            <SiHotjar /> Trends
          </NavLink>
          <NavLink to="/favorites" className="menu-item">
            <BsFillBookmarkFill /> Favorites
          </NavLink>
          <NavLink to="/settings" className="menu-item">
            <IoMdSettings /> Settings
          </NavLink>
        </nav>
        <div className="menu-footer">
          <div className="theme-change">
            <label className="switch">
              <input type="checkbox" onChange={handleChangeTheme} />
              <span className="slider round"></span>
            </label>
          </div>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
