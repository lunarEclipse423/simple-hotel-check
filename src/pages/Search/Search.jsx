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
import formatWords from "../../utils/formatWords";
import validateLocation from "../../utils/validateLocation";
import { HOTELS_NOT_FOUND } from "../../errors/errors";
import "./Search.scss";

const Search = () => {
  const hotelWords = ["отель", "отеля", "отелей"];
  const errorStartValues = {
    location: "",
    hotels: "",
  };
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
  const [errors, setErrors] = useState(errorStartValues);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHotels(location, checkInDate, days, 20);
        setHotels(data);
      } catch (e) {
        setErrors({ ...errors, hotels: HOTELS_NOT_FOUND });
      }
    };
    fetchData().catch(console.error);
  }, []);

  const searchAvailableHotels = async (e) => {
    e.preventDefault();
    setErrors(errorStartValues);
    let validationErrors = validateLocation(location);
    if (validationErrors.location !== "") {
      setErrors(validationErrors);
      return;
    }
    try {
      const data = await fetchHotels(location, checkInDate, days, 20);
      setHotels(data);
      setHotelCheckInDate(checkInDate);
      setHotelDays(days);
      setDisplayedLocation(location);
      setDisplayedCheckInDate(formatDate(checkInDate));
    } catch (e) {
      setErrors({ ...errors, hotels: HOTELS_NOT_FOUND });
    }
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
              <div className="input-wrapper search__input-wrapper">
                <label className="input-label search__input-label">Локация</label>
                <input
                  className={`input${
                    errors.location === "" ? "" : " input_error"
                  } search__input`}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                />
                <span className="error">
                  {errors.location === "" ? "" : errors.location}
                </span>
              </div>
              <div className="input-wrapper search__input-wrapper">
                <label className="input-label search__input-label">Дата заселения</label>
                <input
                  className="input search__input"
                  value={checkInDate}
                  min={todaysDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  type="date"
                />
              </div>
              <div className="input-wrapper search__input-wrapper">
                <label className="input-label search__input-label">Количество дней</label>
                <input
                  className="input search__input"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  type="number"
                  min="1"
                  max="100"
                />
              </div>
              <input className="button search__button" type="submit" value="Найти" />
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
              <span className="favorite-hotels-number">{favorites.length}</span>{" "}
              {formatWords(favorites.length, hotelWords)}
            </div>
            <div className="hotels-list">
              {errors.hotels ? (
                <h4>{errors.hotels}</h4>
              ) : (
                hotels &&
                hotels.map((hotel) => (
                  <HotelCard
                    hotel={hotel}
                    checkInDate={hotelCheckInDate}
                    days={hotelDays}
                    isInFavorites={Boolean(
                      favorites.find((el) => el.hotelId === hotel.hotelId)
                    )}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
