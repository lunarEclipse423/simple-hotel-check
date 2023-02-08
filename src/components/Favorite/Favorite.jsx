import React from "react";
import HotelAdditional from "../HotelAdditional/HotelAdditional";
import HotelInfo from "../HotelInfo/HotelInfo";
import "./Favorite.scss";

const Favorite = ({ favoriteHotel }) => {
  return (
    <>
      <div className="favorite-hotel">
        <div className="favorite-hotel-wrapper">
          <div className="favorite__hotel-info">
            <HotelInfo
              hotelName={favoriteHotel.hotelName}
              checkInDate={favoriteHotel.checkInDate}
              days={favoriteHotel.days}
              stars={favoriteHotel.stars}
            />
          </div>
          <div className="favorite__hotel-additional">
            <HotelAdditional
              isInFavorites={true}
              hotel={favoriteHotel}
              checkInDate={favoriteHotel.checkInDate}
              days={favoriteHotel.days}
            />
          </div>
        </div>
      </div>
      <hr className="favorite__light-divider" />
    </>
  );
};

export default Favorite;
