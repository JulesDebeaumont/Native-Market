/* eslint-disable no-undef */
const url = 'http://10.31.4.155:7000';

export function getAllPanier() {
  return fetch(`${url}/panier`)
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de getAllPanier ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}

export function patchCartToEmpty(cart) {
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${url}/panier`, {
    method: 'PATCH',
    body: JSON.stringify(cart),
    headers: header,
  })
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de patchCartToEmpty ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}

export function getPanierById(id) {
  return fetch(`${url}/panier/${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de getPanierById ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}

export function patchPanierById(article) {
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${url}/panier/${article.id}`, {
    method: 'PATCH',
    body: JSON.stringify(article),
    headers: header,
  })
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de patchPanierById ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}

export function deletePanierById(id) {
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${url}/panier/${id}`, {
    method: 'DELETE',
    headers: header,
  })
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de deletePanierById ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}

export function postPanierByID(article) {
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${url}/panier`, {
    method: 'POST',
    body: JSON.stringify(article),
    headers: header,
  })
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de postPanierByID ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}
