const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const registration = (email, password) => {
  return fetch("https://auth.nomoreparties.co/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkRes);
};

export const authorize = (email, password) => {
  return fetch("https://auth.nomoreparties.co/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkRes);
};

export const checkToken = (token) => {
  return fetch("https://auth.nomoreparties.co/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
};
