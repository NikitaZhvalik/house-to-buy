export default class FavoritesCards {
    constructor(favsList) {
        this.favsList = favsList;
    }

    async getFavs() {
        try {
            const ids = this.favsList.toString();
            if (ids) {
                const queryStr = `https://jsproject.webcademy.ru/items?ids=${ids}`;
                const result = await fetch(queryStr);
                const data = await result.json();
                this.cards = await data;
            }
        }
        catch(error) {
            alert(error)
        }
    }

}