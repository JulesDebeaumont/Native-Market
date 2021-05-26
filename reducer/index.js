export const initialState = {
  articles: {},
  cart: {},
};

export default function reducer(state = initialState, action) {
  const { id } = action;

  switch (action.type) {
    case 'setArticles':
      return { ...state, articles: action.articles };

    case 'setCart':
      return { ...state, cart: action.cart };

    case 'incrementArticleInCart':
      return {
        ...state,
        cart: { ...state.cart, [id]: { ...state.cart[id], quantity: { ...(state.cart[id].quantity + 1) } } },
      };

    /*
    return { ...state , cart : 
      { ...state.cart , [id] : 
      { ...state.cart[id] , quantity :
      { ...state.cart[id].quantity + 1}}}};
    */

    case 'decrementArticleInCart':
      if (action.quantity > 0) {
        return {
          ...state,
          cart: { ...state.cart, [id]: { ...state.cart[id], quantity: { ...(state.cart[id].quantity - 1) } } },
        };
      }

      return null;

    default:
      throw new Error();
  }
}
