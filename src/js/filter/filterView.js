import 'url-search-params-polyfill';

const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterFields: document.getElementsByClassName('range__input'),
}

export function render(params) {

    let complexNames = '';
    params.complexNames.forEach( name => complexNames += `<option value="${name}">ЖК ${name}</option>`);

    let rooms = '';
    params.roomValues.forEach( value => rooms += `  <input
                                                    name="rooms"
                                                    type="checkbox"
                                                    id="rooms_${value}"
                                                    class="rooms__checkbox"
                                                    value="${value}"/>
                                                    <label for="rooms_${value}" class="rooms__btn">${value}</label>`);
    
    const html = `
    <form id='filter-form' method="GET" class="container p-0">
        <div class="heading-1">Выбор квартир:</div>
        <div class="filter">
            <div class="filter__col">
                <div class="filter__label">Выбор проекта:</div>
                <select name="complex" id="" class="filter__dropdown">
                    <option value="all">Все проекты</option>
                    ${complexNames}
                </select>
            </div>
            <div class="filter__col rooms">
                <div class="filter__label">Комнат:</div>
                <div class="rooms__wrapper">
                    ${rooms}
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Площадь:</div>
                <div class="range__wrapper">
                    <label class="range">
                        <div for="" class="range__label">от</div>
                        <input
                            name="sqmin"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMin}"
                            value = "${params.squareMin}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                    <label class="range">
                        <div for="" class="range__label">до</div>
                        <input
                            name="sqmax"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMax}"
                            value = "${params.squareMax}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Стоимость:</div>
                <div class="range__wrapper">
                    <div class="range">
                        <label for="" class="range__label">от</label>
                        <input
                            type="number"
                            name="pricemin"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMin}"
                            value = "${params.priceMin}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                    <div class="range">
                        <label for="" class="range__label">до</label>
                        <input
                            type="number"
                            name="pricemax"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMax}"
                            value = "${params.priceMax}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter__buttons">
            <button class="filter__show">Показать объектов</button>
            <button class="filter__reset" type="reset">Сбросить фильтр</button>
        </div>
    </form>
    `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
}

export function changeBtnText(number) {
    let msg ;
    if (number > 0) {
        msg = `Показать ${number} объектов`;
    } 
    else {
        msg = "Объекты не найдены";
    }
    document.querySelector('.filter__show').innerText = msg;
    
}

export function getInput() {
    const searchParams = new URLSearchParams();
    
    // 1. получаем значения с селекта
    if (elements.filterSelect[0].value !== 'all') {
        // append позволяет вставить в конец какого-либо элемента другой элемент
        searchParams.append(elements.filterSelect[0].name, elements.filterSelect[0].value);
    }

    // 2. получаем значения комнат - чекбоксы
    const roomsValues = [];
    // Array.from - делает из псевдомассива массив, для того, чтобы мы смогли применить к нему метод forEach
    Array.from(elements.filterRooms).forEach((checkbox) => {
        if (checkbox.value !== '' && checkbox.checked) {
            roomsValues.push(checkbox.value);
        }
    })
    const roomsValuesStr = roomsValues.join(',');
    // проверяем, что roomsValuesStr не пустая строка и тогда добавляем в URL rooms+массив с кол-ом комнат
    if (roomsValuesStr !== '') {
        searchParams.append('rooms', roomsValuesStr)
    }

    // 3. получаем значения площадь и цену из input'во
    Array.from(elements.filterFields).forEach((input) => {
        if (input.value !== '') {
            searchParams.append(input.name, input.value);
        }
    })

    const queryString = searchParams.toString();

    if (queryString) {
        return '?' + queryString;
    } else {
        return '';
    }
}