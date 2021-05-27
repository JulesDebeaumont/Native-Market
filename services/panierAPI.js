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

export function patchPanierById(panier) {
  const header = new Headers({
    'Content-Type': 'application/merge-patch+json',
  });

  return fetch(`${url}/panier/${panier.id}`, {
    method: 'PATCH',
    body: JSON.stringify(panier),
    headers: header,
  })
    .then(response => {
      if (response.ok) return response.json();
      throw Error(`Erreur au niveau de getPanierById ${response.status}`);
    })

    .catch(error => {
      console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
    });
}
