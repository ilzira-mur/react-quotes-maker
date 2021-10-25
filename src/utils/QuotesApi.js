class QuotesApi {
    constructor(options) {
        ({ baseUrl: this._baseUrl } = options);
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getQuotesList() {
        return fetch(this._baseUrl, {
            headers: {
                'x-rapidapi-host': 'timshim-quotes-v1.p.rapidapi.com',
                'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
            }
        }).then(
            this._checkResponse
        );
    }
}

const quotesApi = new QuotesApi({
    baseUrl: 'https://timshim-quotes-v1.p.rapidapi.com/quotes',
});

export default quotesApi;