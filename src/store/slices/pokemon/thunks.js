import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons =  (page = 10) => {
    return async (dispatch, getState) => {
        dispatch( startLoadingPokemons() )

        // TODO: do http fetch
        const LIMIT = 10
        // const url = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${page * LIMIT}`
        // const data = await fetch(url)
        //                     .then(res => res.json())
        const {data} = await pokemonApi('/pokemon', {
            params: {
                limit: LIMIT,
                offset: page * LIMIT
            }
        })


        dispatch(setPokemons({
            page: page,
            pokemons: data.results
        }))
    }
}