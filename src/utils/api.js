class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getQuote() {
        return fetch(this._url, {
            method: 'GET',
            headers: this._headers
        }).then(this._checkResponse);
    }
}

const api = new Api({
    url: 'https://favqs.com/api/qotd',
    headers: {
      "Content-Type": "application/json",
    },
  });

export default api;