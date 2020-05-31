import { Pokemon } from "./store";
import store from "../index";

export function storeData() {
  const pokemons: Pokemon[] = store.getState().pokemons;
  if (pokemons.length) {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }
}

export function getData() {
  const pokemons = localStorage.getItem("pokemons");
  if (pokemons) {
    return JSON.parse(pokemons);
  } else {
    return [];
  }
}
