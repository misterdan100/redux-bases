import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { useEffect } from "react";

export default function PokemonApp() {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {isLoading ? (
        <p> Loading pokemons....</p>
      ) : (
        <>
        <div
          style={{
            display: 'flex',
            gap: '12px'
          }}
        >
          <button
            onClick={() => dispatch(getPokemons(Math.max(page - 1, 0)))}
            >Prev page</button>
          <p>Pokemon page: {page}</p>
          <button
            onClick={() => dispatch(getPokemons(page + 1))}
            >Next page</button>
        </div>
          <ul>
            {pokemons?.map((pokemon) => {
              const number = pokemon.url.split('/').at(-2)
              
              return <li key={pokemon.name}>{`#${number} - ${pokemon.name}`}</li>
            })}
          </ul>
        </>
      )}
    </>
  );
}
