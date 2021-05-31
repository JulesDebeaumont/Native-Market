/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';
import { changeQuantityArticleInCart, setIsBusy, unsetIsBusy, resetCart } from '../actions/index';
import { patchPanierById, postPanierByID, postPanier } from '../services/panierAPI';

export default function useQuantity() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  function changeQuantity(quantity, id, prix) {
    if (quantity >= 0) {
      if (state.cart[id] !== undefined) {
        dispatch(setIsBusy());
        dispatch(changeQuantityArticleInCart({ quantity, id, prix }));
        patchPanierById({ quantity, id, prix });
        dispatch(unsetIsBusy());
      } else {
        dispatch(setIsBusy());
        dispatch(changeQuantityArticleInCart({ quantity, id, prix }));
        postPanierByID({ quantity, id, prix });
        dispatch(unsetIsBusy());
      }
    }
  }

  return { changeQuantity, isBusy: state.isBusy };
}
