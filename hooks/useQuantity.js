/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useContext } from 'react';
import { MyContext } from '../context/store';
import { changeQuantityArticleInCart, setIsBusy, unsetIsBusy, deleteArticleInCart } from '../actions/index';
import { patchPanierById, postPanierByID, deletePanierById } from '../services/panierAPI';

export default function useQuantity() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(MyContext);

  async function changeQuantity(quantity, id, prix) {
    if (quantity > 0) {
      if (state.cart[id] !== undefined) {
        dispatch(setIsBusy(id));
        const response = await patchPanierById({ quantity, id, prix });
        dispatch(changeQuantityArticleInCart(response));
        dispatch(unsetIsBusy(id));
      } else {
        dispatch(setIsBusy(id));
        const response = await postPanierByID({ quantity, id, prix });
        dispatch(changeQuantityArticleInCart(response));
        dispatch(unsetIsBusy(id));
      }
    } else if (quantity === 0) {
      dispatch(setIsBusy(id));
      await deletePanierById(id);
      dispatch(deleteArticleInCart(id));
      dispatch(unsetIsBusy(id));
    }
  }

  return { changeQuantity, isBusy: state.isBusy };
}
