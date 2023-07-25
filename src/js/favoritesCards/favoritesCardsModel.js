export default class FavoritesCards {
    constructor(favsList) {
        this.favsList = favsList;
    }

    async getFavs() {
        const ids = this.favsList.toString();
        const queryStr = `https://jsproject.webcademy.ru/items?ids=${ids}`;
        const result = await fetch(queryStr);
        const data = await result.json();
        this.cards = await data;
    }

}