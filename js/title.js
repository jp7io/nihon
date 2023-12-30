// @ts-check

import { dict } from '../data/dict.js';
import { findCity, findRegion } from './regions.js';
import { state } from './state.js';

export const getTitle = () => {
  const { region, prefecture, city, municipality } = state;

  if (municipality.val) {
    const tokyo = findCity('Tokyo');
    const kanto = findRegion('Kanto');
    return [
      dict.japan,
      kanto && kanto.name,
      tokyo && tokyo.name,
      municipality.val.name,
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
