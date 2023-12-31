import Filter from './filterModel';
import * as view from './filterView';
import {renderLoading} from "../loading/loadingView";

export default async function(state) {
    renderLoading();
    // создаем объект фильтра
    if (!state.filter) state.filter = new Filter();
    // получаем параметры для фильтра
    await state.filter.getParams();
    // отрисовка фильтра
    view.render(state.filter.params);
    // запрос на сервер
    await state.filter.getResults();
    // del loading
    const loadingEl = document.querySelector('#loading');
    if (loadingEl) {
        loadingEl.parentNode.removeChild(loadingEl)
    }
    state.results = state.filter.result;
    // обновляем счетчик на кнопке
    view.changeBtnText(state.filter.result.length);

    // прослушка change формы
    const form = document.querySelector('#filter-form');
    form.addEventListener('change', async (e) => {
        e.preventDefault();
        state.filter.query = view.getInput();
        await state.filter.getResults();
        state.results = state.filter.result;
        view.changeBtnText(state.filter.result.length);
    })
    // прослушка reset формы
    form.addEventListener('reset', async () => {
        state.filter.query = '';
        await state.filter.getResults();
        state.results = state.filter.result;
        view.changeBtnText(state.filter.result.length);
    })
    // прослушка submit формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        state.emitter.emit('event:render-listing', {});
    }) 
}