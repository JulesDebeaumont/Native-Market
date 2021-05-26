/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';

export default function useQuantity() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  function changeQuantity(value, id) {
    if (value >= 0) {
      dispatch({ type: 'changeQuantityArticleInCart', value, id });
    }
  }

  return { changeQuantity };
}
