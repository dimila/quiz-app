export function getCards() {
  return fetchCards()
}

export function postCard(data) {
  return fetchCards({ method: 'POST', data })
}

export function patchCard(id, data) {
  return fetchCards({ method: 'PATCH', id, data })
}

export function deleteCard(id) {
  return fetchCards({ method: 'DELETE', id })
}

function fetchCards({ method = 'GET', id = '', data } = {}) {
  return fetch('/cards/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function getUsers() {
  return fetchUser()
}

export function postUser(data) {
  return fetchUser({ method: 'POST', data })
}

function fetchUser({ method = 'GET', id = '', data } = {}) {
  return fetch('/user/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function getRating() {
  return fetchRating()
}

function fetchRating({ method = 'GET', id = '', data } = {}) {
  return fetch('/rating/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function deleteRating(id) {
  return fetchRating({ method: 'DELETE', id })
}

export function editRating(id, data) {
  return fetchRating({ method: 'PATCH', id, data })
}

export function postRating(data) {
  return fetchRating({ method: 'POST', data })
}
