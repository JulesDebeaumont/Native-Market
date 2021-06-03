/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';
import { setIsBusy, unsetIsBusy, resetCart } from '../actions/index';
import { deletePanierById } from '../services/panierAPI';

export default function useCart() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  async function resetPanier() {
    dispatch(setIsBusy());
    for (const article in state.cart) {
      deletePanierById(article);
    }
    dispatch(resetCart());
    dispatch(unsetIsBusy());
  }

  return { resetPanier };
}
