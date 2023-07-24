export function render(object) {
    const appContainer = document.querySelector('#app');

    const html = `
            <div class="container p-0 pt-5">
                <div class="heading-1">
                    ${object.title}, ${object.square} м2 за ${object.price_total} ₽
                </div>

                <!-- object -->
                <div class="object">
                    <!-- object__photo -->
                    <div class="object__photo">
                        <div class="object__photo-wrapper">
                            <img src="${object.image}" alt=""/>
                        </div>
                    </div>
                    <!-- // object__photo -->

                    <!-- object__desc -->
                    <div class="object__desc">
                        <div class="object__desc-sector">
                            ЖК ${object.complex_name}
                        </div>

                        <div class="object__desc-name">
                            <div class="object__desc-title">
                            ${object.title}
                            </div>
                            <div class="object__desc-art">${object.scu}</div>

                            <!-- Добавить в избранное -->
                            <button class="button-favourite">
                                <i class="fas fa-heart"></i> <span>В избранное</span>
                            </button>

                            <!-- В Избранном -->
                            <button class="button-favourite button-favourite--active">
                                <i class="fas fa-heart"></i> <span>В избранном</span>
                            </button>

                        </div>

                        <div class="object__desc-details">
                            <!-- params -->
                            <div class="params">
                                <div class="params__item">
                                    <div class="params__definition">Корпус</div>
                                    <div class="params__value">${object.building}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Этаж</div>
                                    <div class="params__value">${object.floor}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Номер</div>
                                    <div class="params__value">${object.flat_number}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Комнат</div>
                                    <div class="params__value">${object.rooms}</div>
                                </div>
                            </div>
                            <!-- // params -->
                        </div>

                        <div class="details">
                            <div class="details__row">
                                <div class="details__name">Стоимость</div>
                                <div
                                    class="details__value details__value--price"
                                >
                                ${object.price_total} ₽
                                </div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Цена за м2</div>
                                <div class="details__value">${object.price_sq_m} ₽/м2</div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Площадь</div>
                                <div class="details__value">${object.square} м2</div>
                            </div>
                        </div>

                        <button class="button-order">Забронировать</button>
                        <!-- <button class="button-preview">Записаться на просмотр</button> -->
                    </div>
                    <!-- // object__desc -->
                </div>
                <!-- // object -->
            </div>

            <div class="container p-0">
                <a href="/" class="back-to-results"
                    >← Вернуться к результатам поиска</a
                >
            </div>    
    `

    appContainer.insertAdjacentHTML('beforeend', html);
}