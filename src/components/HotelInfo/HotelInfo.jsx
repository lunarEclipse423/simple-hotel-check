import React from "react";
import formatDate from "../../utils/formatDate";
import formatWords from "../../utils/formatWords";
import "./HotelInfo.scss";

const HotelInfo = ({ hotelName, checkInDate, days, stars }) => {
  const maxStarsValue = 5;
  const dayWords = ["день", "дня", "дней"];

  return (
    <>
      <h4 className="hotel-title">{hotelName}</h4>
      <div className="hotel-date">
        <span className="booking-date">
          {formatDate(checkInDate)} – {days} {formatWords(days, dayWords)}
        </span>
      </div>
      <div className="hotel-rating">
        {[...Array(stars)].map(() => {
          return <span className="icon star-icon star-icon_yellow"></span>;
        })}
        {[...Array(maxStarsValue - stars)].map(() => {
          return <span className="icon star-icon star-icon_gray"></span>;
        })}
      </div>
    </>
  );
};

export default HotelInfo;
