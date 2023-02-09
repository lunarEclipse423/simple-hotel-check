import calculateOffsetDate from "./calculateOffsetDate";

const fetchHotels = async (location, checkInDate, days, limit) => {
  const checkOutDate = calculateOffsetDate(checkInDate, days);
  const response = await fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=${limit}`
  );
  if (!response.ok) {
    const message = "HTTP status code: " + response.status;
    console.log(message);
    throw new Error(message);
  }
  const data = await response.json();
  return data;
};

export default fetchHotels;
