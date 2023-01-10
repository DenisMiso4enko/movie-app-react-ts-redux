import React from "react";
import {
  setSearchGenre,
  setSearchYear,
} from "../../redux/actionCreators/moviesActionCreators";
import { useDispatch } from "react-redux";

const Options = () => {
  const dispatch = useDispatch();

  return (
    <div className="options">
      <h4>Select Search options</h4>
      <span>Genre</span>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => dispatch(setSearchGenre(e.target.value))}
      >
        <option>Open this select menu</option>
        <option defaultValue="movie">movie</option>
        <option defaultValue="series">series</option>
        <option defaultValue="game">game</option>
      </select>

      <span>Year</span>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => dispatch(setSearchYear(e.target.value))}
      >
        <option>Open this select menu</option>
        <option defaultValue="2010">2010</option>
        <option defaultValue="2009">2009</option>
        <option defaultValue="2008">2008</option>
        <option defaultValue="2007">2007</option>
        <option defaultValue="2006">2006</option>
        <option defaultValue="2005">2005</option>
        <option defaultValue="2004">2004</option>
        <option defaultValue="2003">2003</option>
        <option defaultValue="2002">2002</option>
        <option defaultValue="2001">2001</option>
        <option defaultValue="2000">2000</option>
        <option defaultValue="1999">1999</option>
        <option defaultValue="1998">1998</option>
        <option defaultValue="1997">1997</option>
        <option defaultValue="1996">1996</option>
        <option defaultValue="1995">1995</option>
        <option defaultValue="1994">1994</option>
        <option defaultValue="1993">1993</option>
        <option defaultValue="1992">1992</option>
        <option defaultValue="1991">1991</option>
        <option defaultValue="1990">1990</option>
        <option defaultValue="1989">1989</option>
      </select>
    </div>
  );
};

export default Options;
