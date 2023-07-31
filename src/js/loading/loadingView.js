export function renderLoading() {
    const html = `
        <div class="container" id="loading">
            <div class="preloader-holder">
                <div class="sk-folding-cube">
                    <div class="sk-cube sk-cube-1"></div>
                    <div class="sk-cube sk-cube-2"></div>
                    <div class="sk-cube sk-cube-4"></div>
                    <div class="sk-cube sk-cube-3"></div>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
}