export default class SingleItem {
    constructor(id) {
        this.id = id;
    }

    async getItem() {
        try {
            const queryStr = `https://jsproject.webcademy.ru/items/${this.id}`;
            const response = await fetch(queryStr);
            const data = await response.json();
            this.result = await data;
        }
        catch (error) {
            alert(error);
        }
    }
}