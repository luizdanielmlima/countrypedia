export const getMapZoomLevel = (countryArea: number) => {
  console.log('zoom');
  if (countryArea > 10000000) {
    return 2;
  }
  if (countryArea > 5000000) {
    return 3;
  }
  if (countryArea > 1000000) {
    return 5;
  }
  if (countryArea > 500000) {
    return 7;
  }
  if (countryArea > 300000) {
    return 9;
  }
  if (countryArea > 100000) {
    return 11;
  }
  return 13;
};
