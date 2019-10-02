import React, { useReducer, createContext } from "react";

import { IState, IAction } from './interfaces';

const initialState: IState = {
  episodes: [],
  favorites: []
}

export const Store = createContext<IState | any>(initialState);

function Reducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload._embedded.episodes };
    case "ADD_FAV":
      return { ...state, favorites: action.payload };
    case "REMOVE_FAV":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log("state", state)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}