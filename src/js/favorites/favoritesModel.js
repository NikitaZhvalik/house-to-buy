export default class Favorites {
    constructor() {
        this.favs = [];

    }

    addFav(id) {
        this.favs.push(id); 
    }

    removeFav(id) {
        const index = this.favs.indexOf(id); 
        this.favs.splice(index, 1);
    }

    isFav(id) {
        return this.favs.indexOf(id) !== -1 ? true : false;
    }

    toggleFav(id) {
        this.isFav(id) ? this.removeFav(id) :  this.addFav(id);
    }
}