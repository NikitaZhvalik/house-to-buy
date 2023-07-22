import Filter from './filterModel';
import * as view from './filterView';

export default function() {
    view.render();

    const filter = new Filter();
    filter.getParams();
}