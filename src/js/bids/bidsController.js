import * as view from './bidsView';
import Bids from './bidsModel'; 

export default async function(state) {
    // создаем объект модели для работы с заявками
    if (!state.bids) {
        state.bids = new Bids();
    }
    //получаем заявки с сервера
    await state.bids.getBids();
 
    view.renderBids(state.bids.bids)
}