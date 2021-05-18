/* eslint-disable no-undef */
const url = 'http://10.31.4.155:7000';

export function getAllArticles() {
  return fetch(`${url}/articles`)
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de getAllArticles ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}

export function getArticlesById(id) {
  return fetch(`${url}/articles/${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de getArticlesById ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}
