import Filter from './filterModel';
import * as view from './filterView';

export default async function(state) {
    // создаем объект фильтра
    if (!state.filter) state.filter = new Filter();
    //получаем параметры для фильтра
    await state.filter.getParams();
    //отрисовка фильтра
    view.render(state.filter.params);
}