 export default class Bids {
    constructor() {

    }

    async getBids() {
        try {
            const queryStr = `https://jsproject.webcademy.ru/bids`;
            const result = await fetch(queryStr);
            const data = await result.json();
            this.bids = await data;
        }
        catch (error) {
            alert('Error with getting bids');
            console.warn(error);
        }
    }
 }