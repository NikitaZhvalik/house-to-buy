import homePage from './pages/homePage';
import singleItem from './pages/singleItemPage';
import favouritesPage from './pages/favouritesPage';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';
import eventImitter from './utils/eventEmitter';
import Favorites from './favorites/favoritesModel';

const state = {
	results: [],
	emitter: new eventImitter(),
	favorites: new Favorites(), 
};

// Пути маршрутизатора
const routes = [
	{ path: '/', component: homePage },
	{ path: 'item', component: singleItem },
	{ path: 'favourites', component: favouritesPage },
	{ path: 'bids', component: bidsPage },
];

function findComponentByPath(path, routes) {
	return routes.find(function (route) {
		return route.path === path;
	});
}

// Маршрутизатор
function router() {
	const pathArray = location.hash.split('/');

	let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
	currentPath = currentPath === '' ? '/' : currentPath;

	// сохраняем параметры маршрутизатора
	state.routeParams =  pathArray[2] ? pathArray[2] : '';

	const { component = errorPage } =
		findComponentByPath(currentPath, routes) || {};
	component(state);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
