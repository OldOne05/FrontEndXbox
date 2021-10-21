export const Api = {
    baseUrl: "http://localhost:3000",

    readAllUrl: () => Api.baseUrl + "/usuarios",

    createUsuarioUrl: () => Api.baseUrl + "/usuarios",

    // GET
    buildApiGetRequest: url => 
        fetch(url, {
            method: "GET"
        }),

    // POST
    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body)
        })
};