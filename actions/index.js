export const actions = {
  SET_ARTICLES: 'setArticles',
  SET_CART: 'setCart',
  CHANGE_QUANTITY_ARTICLE_IN_CART: 'changeQuantityArticleInCart',
  DELETE_ARTICLE_IN_CART: 'deleteArticleInCart',
  SET_IS_BUSY: 'setIsBusy',
  UNSET_IS_BUSY: 'unsetIsBusy',
  RESET_CART: 'resetCart',
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

export function deleteArticleInCart(id) {
  return {
    type: actions.DELETE_ARTICLE_IN_CART,
    id,
  };
}

export function setIsBusy(index) {
  return {
    type: actions.SET_IS_BUSY,
    index,
  };
}

export function unsetIsBusy(index) {
  return {
    type: actions.UNSET_IS_BUSY,
    index,
  };
}

export function resetCart() {
  return {
    type: actions.RESET_CART,
  };
}
