/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useEffect, useReducer } from 'react';
import { getAllArticles } from '../services/articleAPI';
import { getAllPanier } from '../services/panierAPI';
import reducer, { initialState } from '../reducer/index';
import { setArticles, setCart } from '../actions/index';

export default function useArticles() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllArticles().then(articles => {
      const allArticles = {};
      for (const i in articles) {
        allArticles[articles[i].id] = articles[i];
      }
      dispatch(setArticles(allArticles));
    }, []);

    getAllPanier().then(panier => {
      const cart = {};
      for (const i in panier) {
        cart[panier[i].id] = panier[i];
      }
      dispatch(setCart(cart));
    });
  }, []);

  return { state, dispatch };
}
