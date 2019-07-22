import { takeLatest, all } from 'redux-saga/effects';
import { 
	GET_BRANDS, 
	GET_CHOCOLATES, 
	GET_CHOCOLATES_BY_ID,
	GET_BRANDS_BY_ID,
	SEARCH_CHOCOLATE
} from '../actionTypes/posts';
import { 
	getPosts, 
	getBrands, 
	getChocolateById,
	getBrandsById,
	searchChocolate
} from './posts';

export function* postsWatcher() {
	yield all([
		takeLatest(GET_CHOCOLATES, getPosts),
		takeLatest(GET_BRANDS, getBrands),
		takeLatest(GET_CHOCOLATES_BY_ID, getChocolateById),
		takeLatest(GET_BRANDS_BY_ID,getBrandsById),
		takeLatest(SEARCH_CHOCOLATE,searchChocolate)
	]);
}
