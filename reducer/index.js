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

    case 'changeQuantityArticleInCart':
      return {
        ...state,
        cart: { ...state.cart, [action.article.id]: { ...action.article } },
      };

    default:
      throw new Error();
  }
}
