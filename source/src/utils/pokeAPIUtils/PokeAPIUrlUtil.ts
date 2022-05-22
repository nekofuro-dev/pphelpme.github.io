function getIdFromUrl(pokeapiUrl: string):number | undefined {
  // remove last /
  const modifiedUrl = pokeapiUrl.endsWith('/') ? pokeapiUrl.slice(0, -1) : pokeapiUrl;
  const extractedIdStr = modifiedUrl.split('/').pop();
  if (extractedIdStr === undefined) {
    return undefined;
  }

  return parseInt(extractedIdStr, 10);
}

const PokeAPIUrlUtil = {
  getIdFromUrl,
};
export default PokeAPIUrlUtil;
