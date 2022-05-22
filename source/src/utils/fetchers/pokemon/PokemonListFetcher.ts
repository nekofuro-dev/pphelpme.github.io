import PokemonGridItemData from '@/components/pageTemplates/gridPages/pokemonGridPage/PokemonGridItemData';
import UrlConst from '@/consts/UrlConst';

const getPokemonList = async (offset: number, limit: number) => {
  const pokemonListUrl = `${UrlConst.POKEAPI_POKEMON_LIST}?offset=${offset}&limit=${limit}`;
  const response = await fetch(pokemonListUrl);
  const result = await response.json();
  // TODO: type validate

  const pokemonList = result.results;
  if (pokemonList === undefined) {
    return undefined;
  }
  return pokemonList as PokemonGridItemData[];
};

const PokemonListFetcher = {
  getPokemonList,
};
export default PokemonListFetcher;
