export const actions = {
  SET_ARTICLES: 'setArticles',
  SET_CART: 'setCart',
  CHANGE_QUANTITY_ARTICLE_IN_CART: 'changeQuantityArticleInCart',
};

export function setArticles(articles) {
  return {
    type: actions.SET_ARTICLES,
    articles,
  };
}

export function setCart(cart) {
  return {
    type: actions.SET_CART,
    cart,
  };
}

export function changeQuantityArticleInCart(article) {
  return {
    type: actions.CHANGE_QUANTITY_ARTICLE_IN_CART,
    article,
  };
}
