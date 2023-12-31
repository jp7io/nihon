// @ts-check

import { dict, layers } from '../data/dict.js';
import { findCity, findRegion } from './regions.js';
import { state } from './state.js';

export const getTitle = () => {
  const { layer, region, prefecture, city, municipality, municipalityType } = state;

  if (layer.val === layers.tokyo || municipality.val) {
    const tokyo = findCity('Tokyo');
    const kanto = findRegion('Kanto');
    return [
      dict.japan,
      kanto?.name,
      tokyo?.name,
      municipalityType.val?.name,
      municipality.val?.name,
    ]
  }

  if (city.val) {
    return [
      dict.japan,
      city.val.prefecture.region.name,
      prefecture.val.name,
      city.val.name,
    ]
  }

  if (prefecture.val) {
    return [
      dict.japan,
      prefecture.val.region.name,
      prefecture.val.name,
    ]
  }

  if (region.val) {
    return [
      dict.japan,
      region.val.name,
    ]
  }

  return [
    dict.mapOfJapan,
  ]
}
