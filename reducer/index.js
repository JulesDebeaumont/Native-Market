import { actions } from '../actions/index';

export const initialState = {
  articles: {},
  cart: {},
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

    default:
      throw new Error();
  }
}
