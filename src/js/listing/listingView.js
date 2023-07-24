export function render() {
    const html = `
                <div class="cards-wrapper">
                    <div class="container p-0 pt-5">
                        <div id="listingContainer" class="row">
                            <!-- cards render from js -->
                        </div>
                    </div>
                </div>
    `

    document.querySelector('#app').insertAdjacentHTML('beforeend', html);
}

export function renderCard(object, isFaved) {
    const html = `
            <article class="col-md-4">

            <a href="#/item/${object.id}" class="card">
                <div class="card__header">
                    <div class="card__title">
                        ЖК ${object.complex_name}
                    </div>
                    <div class="card__like ${isFaved ? 'card__like--active' : ''}">
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

    document.querySelector('#listingContainer').insertAdjacentHTML('beforeend', html);
}

export function clearListingContainer() {
    document.querySelector('#listingContainer').innerHTML = '';
}