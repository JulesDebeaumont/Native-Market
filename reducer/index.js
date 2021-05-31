import { actions } from '../actions/index';

export const initialState = {
  articles: {},
  cart: {},
  isBusy: false,
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

    case actions.SET_IS_BUSY:
      return {
        ...state,
        isBusy: true,
      };

    case actions.UNSET_IS_BUSY:
      return {
        ...state,
        isBusy: false,
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
