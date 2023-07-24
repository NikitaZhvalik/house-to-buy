export default class Favorites {
    constructor() {
        this.favs = [];
        // загружаем данные из LocalStorage
        this.loadData();
    }
    // добавляем карточку в избранное
    addFav(id) {
        this.favs.push(id); 
    // сохраняем в LocalStorage
        this.saveData();
    }
    // убираем карточку из избранного
    removeFav(id) {
        const index = this.favs.indexOf(id); 
        this.favs.splice(index, 1);
    // сохраняем в LocalStorage
        this.saveData();
    }
    // проверяем, что есть ли эта карточка в избранном
    isFav(id) {
        return this.favs.indexOf(id) !== -1 ? true : false;
    }
    // убираем/добавляем карточку в избранное
    toggleFav(id) {
        this.isFav(id) ? this.removeFav(id) :  this.addFav(id);
    }

    saveData() {
        localStorage.setItem('favs', JSON.stringify(this.favs));
    }

    loadData() {
        const storage = JSON.parse(localStorage.getItem('favs'));
        if (storage) this.favs = storage;
    }
}