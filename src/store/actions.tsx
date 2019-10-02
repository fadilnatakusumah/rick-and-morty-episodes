import axios from 'axios';
import { useContext } from 'react';
import { Store } from '.';
import { IAction, IState } from './interfaces';

export const fetchData = async (dispatch: React.Dispatch<IAction>) => {
  const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const response = await axios.get<string>(URL)
  if (response.status !== 200) {
    return dispatch({ type: "ERROR", payload: null });
  }
  return dispatch({ type: "FETCH_DATA", payload: response.data });
}


export const toggleFav = (episode: any, state: IState, dispatch: React.Dispatch<IAction>) => {
  const check = state.favorites.find(fav => fav.id === episode.id);
  if (check) {
    const newFav = state.favorites.filter(fav => fav.id !== episode.id);
    console.log("newFav", newFav)
    return dispatch({ type: "REMOVE_FAV", payload: newFav });
  }
  const newFav = [...state.favorites, episode];
  return dispatch({ type: "ADD_FAV", payload: newFav });
}

