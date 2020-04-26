import React, { useState, useEffect } from "react"
import styles from './Search.scss';
import { styleNames } from "../../../services/styleNames";
import SearchCard from "./SearchCard/SearchCard";
import { useDispatch } from "react-redux";
import { searchUsers } from "../../../actions/user-search.action";

const sn = styleNames(styles);



const Search: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    if (isFocus)
      dispatch(searchUsers(searchText));
  });

  const handleFocus = (isFocus: boolean) => {
    setTimeout(() => setIsFocus(isFocus), 100);
  }


  return (
    <div className='search'>
      Поиск людей
      <input
        value={searchText}
        onChange={(e) => handleChange(e)}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)} />

      {isFocus && <SearchCard />}
    </div>
  );
}

export default Search;