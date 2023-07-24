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

    async submitForm(formData) {
        const queryStr = `https://jsproject.webcademy.ru/bidnew`;
        const response = await fetch(queryStr, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
        })

        const data = await response.json();
        this.response = await data;
    }
}