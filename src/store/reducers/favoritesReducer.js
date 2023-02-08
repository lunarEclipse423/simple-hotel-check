import { favoritesActionTypes } from "../actions/favorites";

const initState = {
  favoritesList: [],
};

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case favoritesActionTypes.ADD_FAVORITE:
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload.newFavorite],
      };
    case favoritesActionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favoritesList: [
          ...state.favoritesList.filter(
            (favorite) => favorite.hotelId !== action.payload.favoriteToRemove.hotelId
          ),
        ],
      };
    case favoritesActionTypes.SORT:
      state.favoritesList.sort((a, b) => {
        switch (action.payload.order) {
          case "ascending":
            return a[action.payload.option] - b[action.payload.option];
          case "descending":
            return b[action.payload.option] - a[action.payload.option];
          default:
            return;
        }
      });
      return { ...state, favoritesList: [...state.favoritesList] };
    default:
      return state;
  }
};

export default favoritesReducer;
