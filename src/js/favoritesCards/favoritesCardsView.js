function renderContainer() {
    const html = `
    <div class="container p-0 mb-5">
        <div class="heading-1">Избранное</div>
    </div>
    
    <div class="cards-wrapper">
        <div class="container p-0">
            <div id="cardHolder" class="row">
                <!-- карточки рендерятся из JS -->
            </div>
        </div>
    </div>
    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
}

function renderCards(object) {
    const html = `
            <article class="col-md-4">

            <a href="#/item/${object.id}" class="card" data-id='${object.id}'>
                <div class="card__header">
                    <div class="card__title">
                        ЖК ${object.complex_name}
                    </div>
                    <div class="card__like card__like--active">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="card__img">
                    <img src="${object.image}" alt="План квартиры" />
                </div>
                <div class="card__desc">
                    <div class="card__price">
                        <div class="card__price-total">
                            ${object.price_total}
                        </div>
                        <div class="card__price-per-meter">
                             ${object.price_sq_m} ₽/м2
                        </div>
                    </div>

                    <div class="card__params params">
                        <div class="params__item">
                            <div class="params__definition">
                                Комнат
                            </div>
                            <div class="params__value">${object.rooms}</div>
                        </div>
                        <div class="params__item">
                            <div class="params__definition">
                                Площадь
                            </div>
                            <div class="params__value">${object.square}</div>
                        </div>
                    </div>
                </div>

                <div class="card__footer">
                    <div class="card__art">${object.scu}</div>
                    <div class="card__floor">Этаж ${object.floor} из ${object. floors_total}</div>
                </div>
            </a>
        </article>
    `
 
    document.querySelector('#cardHolder ').insertAdjacentHTML('beforeend', html);
}

export function renderPage(cards) {
    renderContainer();

    cards.forEach((card) => {
        renderCards(card);
    })
}

export function toggleFavoriteIcon(elIcon, isFaved) {
    if (isFaved === true) {
        elIcon.classList.add('card__like--active');
    }
    else {
        elIcon.classList.remove('card__like--active');
    }
}