/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useReducer } from 'react';
import reducer, { initialState } from '../reducer/index';

export default function useQuantity() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeQuantity(value, id) {
    if (value > 0) {
      dispatch({ type: 'changeQuantityArticleInCart', value, id });
    }
  }

  return { changeQuantity };
}
