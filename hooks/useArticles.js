/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect, useReducer } from 'react';
import { getAllArticles } from '../services/articleAPI';
import { getAllPanier } from '../services/panierAPI';
import reducer, { initialState } from '../reducer/index';

export default function useArticles() {
  const [articles, setArticles] = useState({});
  const [inCart, setInCart] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllArticles().then(articles => setArticles(articles));
    getAllPanier().then(panier => {
      const transformCart = {};
      for (const i in panier) {
        transformCart[panier[i].id] = panier[i];
      }
      setInCart(transformCart);
    });
  }, []);

  return { articles, inCart, state, dispatch };
}
