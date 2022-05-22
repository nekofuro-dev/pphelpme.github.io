import Card from '@/components/cards/Card';
import PokemonListFetcher from '@/utils/fetchers/pokemon/PokemonListFetcher';
import * as React from 'react';
import useSWR from 'swr';
import GridPage from '../GridPage';
import PokemonGridItem from './PokemonGridItem';

export default function PokemonGridPage() {
  // get data from api
  const { data: pokemonItemsData, error } = useSWR([2, 20], PokemonListFetcher.getPokemonList);

  if (error || pokemonItemsData === undefined) {
    return (
      <Card>
        Cannot get data
      </Card>
    );
  }

  return (
    <GridPage items={pokemonItemsData} keyField="id" ItemComponent={PokemonGridItem} />
  );
}
