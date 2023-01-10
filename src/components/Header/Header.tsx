import React, { useEffect, useRef, useState } from "react";
import {
  setSearchGenre,
  setSearchValue,
  setSearchYear,
} from "../../redux/actionCreators/moviesActionCreators";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../models/StoreModel";
import { BsFilterRight } from "react-icons/bs";
import Options from "./Options";

function useOutsideAlerter(ref: any, setOpenOptions: Function) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);
  const { searchValue } = useSelector((state: IStore) => state.movies);
  const { user } = useSelector((state: IStore) => state.user);
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchValue.length === 0) {
      return;
    } else {
      navigate("/search");
    }
  };

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setOpenOptions);
  return (
    <header className="header" ref={menuRef}>
      <form onSubmit={handleSearch} className="form-search">
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          placeholder="Search..."
        />
        <button
          type="button"
          onClick={() => setOpenOptions(!openOptions)}
          className="btn btn-options"
        >
          <BsFilterRight />
        </button>
        {openOptions && <Options />}
      </form>

      {user ? (
        <div className="user">
          <div className="user-avatar">AL</div>
          <div className="user-name">{user.username}</div>
        </div>
      ) : (
        <div className="user">
          <Link to="/sign-in">Sign in</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
