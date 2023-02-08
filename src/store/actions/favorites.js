export const favoritesActionTypes = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  SORT: "SORT",
};

export const addFavorite = (newFavorite) => {
  return {
    type: favoritesActionTypes.ADD_FAVORITE,
    payload: {
      newFavorite,
    },
  };
};

export const removeFavorite = (favoriteToRemove) => {
  return {
    type: favoritesActionTypes.REMOVE_FAVORITE,
    payload: {
      favoriteToRemove,
    },
  };
};

export const sortFavorites = (option, order) => {
  return {
    type: favoritesActionTypes.SORT,
    payload: {
      option,
      order,
    },
  };
};
