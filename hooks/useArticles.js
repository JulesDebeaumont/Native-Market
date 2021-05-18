import { useState, useEffect } from 'react';
import { getAllArticles } from '../services/articleAPI';
import { getAllPanier } from '../services/panierAPI';

export default function useArticles() {
  const [articles, setArticles] = useState({});
  const [inCart, setInCart] = useState({});

  useEffect(() => {
    getAllArticles().then(articles => setArticles(articles));
    getAllPanier().then(panier => 
        {
            const transformCart = panier.map(v => v.id : { v.id , v.quantity, v.price});
            setInCart(transformCart);
        })
  }, []);

  return { articles, inCart };
}
