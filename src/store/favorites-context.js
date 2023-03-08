import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  function addFavoritesHandler(favorite) {
    setFavorites((favorites) => {
      return favorites.concat(favorite);
    });
  }

  function removeFavoriteHandler(favoriteId) {
    setFavorites((favorites) => {
      return favorites.filter(favorite => favorite.id !== favoriteId);
    });
  }

  function itemIsFavoriteHandler(favoriteId) {
      return favorites.some(favorite => favorite.id === favoriteId);
  }

  const context = {
    favorites: favorites,
    total: favorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;
