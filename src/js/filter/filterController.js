import Filter from './filterModel';
import * as view from './filterView';

export default async function(state) {
    // создаем объект фильтра
    if (!state.filter) state.filter = new Filter();
    // получаем параметры для фильтра
    await state.filter.getParams();
    // отрисовка фильтра
    view.render(state.filter.params);
    // запрос на сервер
    await state.filter.getResults();
    // обновляем счетчик на кнопке
    view.changeBtnText(state.filter.result.length);

    // прослушка событий формы
    const form = document.querySelector('#filter-form');
    form.addEventListener('change', async (e) => {
        e.preventDefault();
        state.filter.query = view.getInput();
        await state.filter.getResults();
        view.changeBtnText(state.filter.result.length);
    })
    // прослушка события reset формы
    form.addEventListener('reset', async () => {
        state.filter.query = '';
        await state.filter.getResults();
        view.changeBtnText(state.filter.result.length);
    })
    
}