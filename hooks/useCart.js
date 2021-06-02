/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';
import { setIsBusy, unsetIsBusy, resetCart } from '../actions/index';
import { patchCartToEmpty } from '../services/panierAPI';

export default function useCart() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  function resetPanier() {
    dispatch(setIsBusy());
    dispatch(resetCart());
    patchCartToEmpty({});
    dispatch(unsetIsBusy());
  }

  return { resetPanier };
}