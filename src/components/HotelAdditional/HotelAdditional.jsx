import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/actions/favorites";
import "./HotelAdditional.scss";

const HotelAdditional = ({ hotel, checkInDate, days, isInFavorites }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(isInFavorites);

  useEffect(() => {
    setIsFavorite(isInFavorites);
  }, [hotel, isInFavorites]);

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavorite({ ...hotel, checkInDate, days }));
    } else {
      dispatch(removeFavorite(hotel));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="hotel-favorite">
        <span
          className={`icon favorite-icon ${
            isFavorite ? "active" : ""
          } hotel-favorite__icon`}
          onClick={toggleFavorite}
        ></span>
      </div>
      <div className="hotel-price">
        <span className="price-text">Price: </span>
        <span className="price-digits">
          {Math.round(hotel.priceFrom).toLocaleString("ru-RU")} ₽
        </span>
      </div>
    </>
  );
};

export default HotelAdditional;
