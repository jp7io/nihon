//@ts-check

import van from '../lib/van.js';
import { state } from '../js/state.js';
import { toId } from '../js/utils.js';
import { TitleElm } from './Title.js';
import { LegendElm } from './Legend/index.js';
import { InfoElm } from './Info.js';
import { LayersAndFillElm } from './LayersAndFill/index.js';
import { ShurikenElm } from './Shuriken.js';
import { MapElm } from './Map/index.js';
import { SvgSourcesElm } from './SvgSources.js';

const { div } = van.tags;

export const Root = div(
  {
    id: 'root',
    class: () => `fillmode-${toId(state.fillmode.val.en)}`,
  },
  TitleElm,
  LegendElm,
  InfoElm,
  LayersAndFillElm,
  ShurikenElm,
  MapElm,
  SvgSourcesElm,
);
