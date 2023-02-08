import calculateOffsetDate from "./calculateOffsetDate";

const fetchHotels = async (location, checkInDate, days, limit) => {
  const checkOutDate = calculateOffsetDate(checkInDate, days);
  const response = await fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=${limit}`
  );
  const data = await response.json();
  return data;
};

export default fetchHotels;
