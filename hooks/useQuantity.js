/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';
import { changeQuantityArticleInCart } from '../actions/index';

export default function useQuantity() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  function changeQuantity(quantity, id, prix) {
    if (quantity >= 0) {
      dispatch(changeQuantityArticleInCart({ quantity, id, prix }));
    }
  }

  return { changeQuantity };
}
