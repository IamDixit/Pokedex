import { all, takeLatest, put } from "redux-saga/effects";
import { IPokemonAction } from "../actions/pokemon";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
type response = {
  sprites: {
    back_default: string;
  };
};

function* getPokemonDetails(params: IPokemonAction) {
  try {
    const response: response = yield fetch(`${baseUrl}${params.payload.name}`)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
    if (response) {
      if (response.sprites) {
        yield put({
          type: "insertPokemon",
          payload: {
            uid: new Date().getTime().toString(),
            name: params.payload.name,
            hp: Math.floor(Math.random() * 100),
            attack: Math.floor(Math.random() * 100),
            defence: Math.floor(Math.random() * 100),
            type: "normal",
            imageUrl: response.sprites.back_default,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* getPokemonImage(params: IPokemonAction) {
  try {
    const response: response = yield fetch(`${baseUrl}${params.payload.name}`)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
    if (response) {
      if (response.sprites) {
        yield put({
          type: "updatePokemon",
          payload: {
            ...params.payload,
            imageUrl: response.sprites.back_default,
          },
        });
      } else {
        yield put({
          type: "updatePokemon",
          payload: {
            ...params.payload,
            imageUrl: "",
          },
        });
      }
    } else {
      yield put({
        type: "updatePokemon",
        payload: {
          ...params.payload,
          imageUrl: "",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* actionWatcher() {
  yield takeLatest("getPokemonDetails", getPokemonDetails);
  yield takeLatest("getPokemonImage", getPokemonImage);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
