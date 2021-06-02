/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';
import { setIsBusy, unsetIsBusy, resetCart } from '../actions/index';
import { patchCartToEmpty } from '../services/panierAPI';

export default function useCart() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  async function resetPanier(empty) {
    dispatch(setIsBusy());
    await patchCartToEmpty(empty);
    dispatch(resetCart());
    dispatch(unsetIsBusy());
  }

  return { resetPanier };
}
