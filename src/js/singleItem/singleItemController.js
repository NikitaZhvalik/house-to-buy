import SingleItem from './singleItemModel'
import * as view from './singleItemView';

export default async function () {
    // передаем id
    state.singleItem = new SingleItem(state.routeParams);
    // ждем ответа от сервера(карточку объекта )
    await state.singleItem.getItem();
    // рендерим ответ от сервера(карточку объекта)
    view.render(state.singleItem.result);

    // открытие модального окна
    document.querySelector('.button-order').addEventListener('click', () => {
        view.showModel();
    });
    // закрытие модального окна при клике на кнопку
    document.querySelector('.modal__close').addEventListener('click', () => {
        view.hideModel();
    });
    // закрытие модального окна при клике вне формы
    document.querySelector('.modal-wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.modal')) {
            return null;
        }
        else {
            view.hideModel();
        }
    });

    // отправка формы
    document.querySelector('.modal__form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = view.getInput();
        await state.singleItem.submitForm(formData);
        
        const response = state.singleItem.response;

        if (response.message === 'Bid Created') {
            alert('Ваша заявка получена!');
            view.hideModel();
            view.clearInput();
        }
        else if (response.message === 'Bid Not Created') {
            response.errors.forEach((error) => {
                alert(error);
            })
        }
    })
}