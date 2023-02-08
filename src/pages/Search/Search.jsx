import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import HotelCard from "../../components/HotelCard/HotelCard";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import { logOutUser } from "../../store/actions/user";
import formatDate from "../../utils/formatDate";
import calculateOffsetDate from "../../utils/calculateOffsetDate";
import fetchHotels from "../../utils/fetchHotels";
import "./Search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todaysDate = calculateOffsetDate(new Date(), 0);
  const favorites = useSelector((state) => state.favorites.favoritesList);
  const [location, setLocation] = useState("Москва");
  const [checkInDate, setCheckInDate] = useState(todaysDate);
  const [displayedLocation, setDisplayedLocation] = useState("Москва");
  const [displayedCheckInDate, setDisplayedCheckInDate] = useState(
    formatDate(new Date())
  );
  const [days, setDays] = useState(1);
  const [hotelCheckInDate, setHotelCheckInDate] = useState(todaysDate);
  const [hotelDays, setHotelDays] = useState(1);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHotels(location, checkInDate, days, 20);
      setHotels(data);
    };
    fetchData().catch(console.error);
  }, []);

  const searchAvailableHotels = async (e) => {
    e.preventDefault();
    const data = await fetchHotels(location, checkInDate, days, 20);
    setHotels(data);
    setHotelCheckInDate(checkInDate);
    setHotelDays(days);
    setDisplayedLocation(location);
    setDisplayedCheckInDate(formatDate(checkInDate));
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/login");
  };

  return (
    <div className="search-page">
      <Header onClickLogOut={handleLogOut} />
      <div className="main-block">
        <div className="column">
          <div className="search-params">
            <form onSubmit={searchAvailableHotels}>
              <div className="input-wrapper">
                <label className="input-label label__search">Локация</label>
                <input
                  className="input input__search"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label label__search">Дата заселения</label>
                <input
                  className="input input__search"
                  value={checkInDate}
                  min={todaysDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  type="date"
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label label__search">Количество дней</label>
                <input
                  className="input input__search"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  type="number"
                  min="1"
                  max="100"
                />
              </div>
              <input className="button button__search" type="submit" value="Найти" />
            </form>
          </div>
          <FavoritesList />
        </div>
        <div className="column">
          <div className="hotels">
            <div className="hotels-header">
              <h2>
                Отели<span className="icon arrow-icon hotels-header__icon"></span>
                {displayedLocation}
              </h2>
              <span className="current-check-in-date">{displayedCheckInDate}</span>
            </div>
            <Slider />
            <div className="favorite-hotels-counter">
              Добавлено в Избранное:{" "}
              <span className="favorite-hotels-number">{favorites.length}</span> отеля
            </div>
            <div className="hotels-list">
              {hotels &&
                hotels.map((hotel) => (
                  <HotelCard
                    hotel={hotel}
                    checkInDate={hotelCheckInDate}
                    days={hotelDays}
                    isInFavorites={Boolean(
                      favorites.find((el) => el.hotelId === hotel.hotelId)
                    )}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
