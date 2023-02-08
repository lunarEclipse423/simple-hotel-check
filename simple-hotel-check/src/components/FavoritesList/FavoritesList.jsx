import React from "react";
import { useSelector } from "react-redux";
import Favorite from "../Favorite/Favorite";
import FavoritesFilter from "../FavoritesFilter/FavoritesFilter";
import "./FavoritesList.scss";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.favoritesList);
  return (
    <div className="favorite-hotels">
      <h3>Избранное</h3>
      <div className="favorites-filtres">
        <FavoritesFilter optionTitle={"Рейтинг"} option={"stars"} />
        <FavoritesFilter optionTitle={"Цена"} option={"priceFrom"} />
      </div>
      <div className="favorite-hotels-list">
        {favorites.length ? (
          favorites.map((favorite) => <Favorite favoriteHotel={favorite} />)
        ) : (
          <h4>В избранном пока пусто...</h4>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
