import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ favorites: favoritesReducer, user: userReducer });

export default rootReducer;
