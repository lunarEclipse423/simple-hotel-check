import React from "react";
import { useDispatch } from "react-redux";
import { sortFavorites } from "../../store/actions/favorites";
import "./FavoritesFilter.scss";

const FavoritesFilter = ({ optionTitle, option }) => {
  const dispatch = useDispatch();

  const sortInSpecificOrder = (order) => {
    dispatch(sortFavorites(option, order));
  };

  return (
    <div className="filter">
      <span className="option-title">{optionTitle}</span>
      <div className="selectors">
        <span
          className="icon select-icon select-icon_up"
          onClick={() => sortInSpecificOrder("ascending")}
        ></span>
        <span
          className="icon select-icon select-icon_down"
          onClick={() => sortInSpecificOrder("descending")}
        ></span>
      </div>
    </div>
  );
};

export default FavoritesFilter;
