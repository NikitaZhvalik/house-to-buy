export default class Filter {
    constructor() {

    }

    async getParams() {
        try {
            const queryString = 'https://jsproject.webcademy.ru/itemsinfo';
            const response = await fetch(queryString);
            const data = await response.json();
            this.params = await data; 
        }
        catch(error) {
            alert(error);
        }
    }

    async getResults() {
        try {
            const queryString = 'https://jsproject.webcademy.ru/items';
            const response = await fetch(queryString);
            const data = await response.json();
            this.result = await data;
        }
        catch(error) {
            alert(error);
        }
    }
}