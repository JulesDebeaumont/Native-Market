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
      console.log(state);
      return {
        ...state,
        cart: { ...state.cart, [action.id]: { ...state.cart[action.id], quantity: action.value } },
      };

    /*
    return { ...state , cart : 
           { ...state.cart , [id] : 
           { ...state.cart[id] , quantity :
           { ...state.cart[id].quantity + 1}}}};
    */

    default:
      throw new Error();
  }
}
