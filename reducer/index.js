/* eslint-disable no-case-declarations */
import { actions } from '../actions/index';

export const initialState = {
  articles: {},
  cart: {},
  isBusy: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ARTICLES:
      return { ...state, articles: action.articles };

    case actions.SET_CART:
      return { ...state, cart: action.cart };

    case actions.CHANGE_QUANTITY_ARTICLE_IN_CART:
      return {
        ...state,
        cart: { ...state.cart, [action.article.id]: { ...action.article } },
      };

    case actions.DELETE_ARTICLE_IN_CART:
      const copyState = { ...state };
      delete copyState.cart[action.id];
      return copyState;

    case actions.SET_IS_BUSY:
      return {
        ...state,
        isBusy: { ...state.isBusy, [action.index]: true },
      };

    case actions.UNSET_IS_BUSY:
      return {
        ...state,
        isBusy: { ...state.isBusy, [action.index]: false },
      };

    case actions.RESET_CART:
      return {
        ...state,
        cart: {},
      };

    default:
      throw new Error();
  }
}
