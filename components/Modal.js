// @ts-check

import { state } from '../js/state.js';
import van from '../lib/van.js';

const { div } = van.tags;

export const ModalElm = () => div(
  {
    id: 'modal',
    onclick: () => {
      state.modal.val = null;
    },
  },
  state.modal.val
);
