import React from "react";
import formatDate from "../../utils/formatDate";
import formatDays from "../../utils/formatDays";
import "./HotelInfo.scss";

const HotelInfo = ({ hotelName, checkInDate, days, stars }) => {
  const maxStarsValue = 5;

  return (
    <>
      <h4 className="hotel-title">{hotelName}</h4>
      <div className="hotel-date">
        <span className="booking-date">
          {formatDate(checkInDate)} – {days} {formatDays(days)}
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
