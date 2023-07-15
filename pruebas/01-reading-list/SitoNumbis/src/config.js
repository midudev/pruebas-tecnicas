const {
  VITE_API_URL,
  // cookies
  VITE_LANGUAGE,
  VITE_BASIC_KEY,
  VITE_USER_COOKIE,
  VITE_USER_PHOTO_COOKIE,
  VITE_USER_APPS_KEY,
  VITE_ACCEPT_COOKIE,
  VITE_DECLINE_COOKIE,
} = import.meta.env;

const config = {
  // cookie
  language: VITE_LANGUAGE,
  apiUrl: VITE_API_URL,
  basicKeyCookie: VITE_BASIC_KEY,
  userCookie: VITE_USER_COOKIE,
  userPhotoCookie: VITE_USER_PHOTO_COOKIE,
  userAppsCookie: VITE_USER_APPS_KEY,
  acceptCookie: VITE_ACCEPT_COOKIE,
  declineCookie: VITE_DECLINE_COOKIE,
};

export default config;
