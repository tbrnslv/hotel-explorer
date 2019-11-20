import { isProd } from "../utils/isProd";

const HEROKU_PROXY =
  "https://cors-anywhere.herokuapp.com/http://sobot.software";

const HOTELS = "/api/hotels/";
const COMMENTS = "/api/hotels/comments/";
const IMAGES = "/api/hotels/images/";

export const API_HOTELS = isProd() ? `${HEROKU_PROXY}${HOTELS}` : HOTELS;

export const API_HOTEL_COMMENTS = isProd()
  ? `${HEROKU_PROXY}${COMMENTS}`
  : COMMENTS;

export const API_HOTEL_IMAGES = isProd() ? `${HEROKU_PROXY}${IMAGES}` : IMAGES;
