import * as React from 'react';
import Card from '@/components/cards/Card';
import PokeAPIUrlUtil from '@/utils/pokeAPIUtils/PokeAPIUrlUtil';
import PokemonGridItemData from './PokemonGridItemData';

export default function PokemonGridItem({ url, name }: PokemonGridItemData) {
  const id = PokeAPIUrlUtil.getIdFromUrl(url);
  if (id === undefined) {
    return (
      <Card>
        Cannot get pokemon
      </Card>
    );
  }
  const spriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <>
      <img className="m-auto" alt={`${name}`} src={spriteSrc} />
      <span className="text-center">{name}</span>
    </>

  );
}
