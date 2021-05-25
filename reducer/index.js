export const initialState = {
  articles: {},
  cart: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setArticles':
      return { ...state, articles: action.articles };
    case 'setCart':
      return { ...state, cart: action.cart };
    default:
      throw new Error();
  }
}
