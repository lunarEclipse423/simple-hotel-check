import React from "react";
import HotelAdditional from "../HotelAdditional/HotelAdditional";
import HotelInfo from "../HotelInfo/HotelInfo";
import "./HotelCard.scss";

const HotelCard = ({ hotel, checkInDate, days, isInFavorites }) => {
  return (
    <>
      <div className="hotel-card">
        <div className="hotel-info">
          <div className="hotel-circle">
            <span className="icon hotel-icon"></span>
          </div>
          <div className="hotel-info-text">
            <HotelInfo
              hotelName={hotel.hotelName}
              checkInDate={checkInDate}
              days={days}
              stars={hotel.stars}
            />
          </div>
        </div>
        <div className="hotel-additional">
          <HotelAdditional
            isInFavorites={isInFavorites}
            hotel={hotel}
            checkInDate={checkInDate}
            days={days}
          />
        </div>
      </div>
      <hr className="hotel-card__light-divider" />
    </>
  );
};

export default HotelCard;
