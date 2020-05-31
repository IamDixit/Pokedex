export type PokemonTypes =
  | "normal"
  | "fighing"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "fire"
  | "grass"
  | "water"
  | "ice"
  | "psychic"
  | "electric";

export const typesArr: { name: string; value: PokemonTypes }[] = [
  {
    name: "Normal",
    value: "normal",
  },
  {
    name: "Fighing",
    value: "fighing",
  },
  {
    name: "Flying",
    value: "flying",
  },
  {
    name: "Poison",
    value: "poison",
  },
  {
    name: "Ground",
    value: "ground",
  },
  {
    name: "Rock",
    value: "rock",
  },
  {
    name: "Bug",
    value: "bug",
  },
  {
    name: "Ghost",
    value: "ghost",
  },
  {
    name: "Fire",
    value: "fire",
  },
  {
    name: "Grass",
    value: "grass",
  },
  {
    name: "Water",
    value: "water",
  },
  {
    name: "ice",
    value: "ice",
  },
  {
    name: "Psychic",
    value: "psychic",
  },
  {
    name: "Electric",
    value: "electric",
  },
];

export interface Pokemon {
  uid: string;
  name: string;
  hp: number;
  attack: number;
  defence: number;
  type: PokemonTypes;
  imageUrl: string;
}

export interface State {
  pokemons: Pokemon[];
}

const initialState: State = {
  pokemons: [],
};

export default initialState;
