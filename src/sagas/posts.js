import {
	getChocolateSuccess,
	getChocolateFailure,
	getBrandsSuccess,
	getBrandsFailure,
	getChocolateByIdSuccess,
	getChocolateByIdFailure,
	getBrandsByIdSuccess,
	getBrandsByIdFailure,
	searchChocolateSuccess,
	searchChocolateFailure
} from '../actionCreator/postsAC';
import { put } from 'redux-saga/effects';

export function* getPosts() {
	try {
		const ChocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
		const chocolates = yield ChocolateResponse.json();
		yield put(getChocolateSuccess(chocolates));
	} catch (error) {
		yield put(getChocolateFailure(error));
	}
}

export function* getBrands() {
	try {
		const brandsResponse = yield fetch(`http://localhost:4000/brands`);
		const brands = yield brandsResponse.json();
		// console.log(brands);
		yield put(getBrandsSuccess(brands));
	} catch (error) {
		yield put(getBrandsFailure(error));
	}
}

export function* getChocolateById(action) {
	try {
		const chocolateResponse = yield fetch(`http://localhost:4000/chocolates/${action.id}`);
		const chocolates = yield chocolateResponse.json();
		yield put(getChocolateByIdSuccess(chocolates));
	} catch (err) {
		yield put(getChocolateByIdFailure(err));
	}
}

export function* getBrandsById(action){
	try{
		const brandsResponse = yield fetch(`http://localhost:4000/chocolates?brandId=${action.id}`)
		const brands = yield brandsResponse.json();
		yield put(getBrandsByIdSuccess(brands));
	}catch(err){
		yield put(getBrandsByIdFailure(err))
	}
}
export function* searchChocolate(action){
	try{
		const chocolateResponse = yield fetch(`http://localhost:4000/chocolates`)
		const search = yield chocolateResponse.json();
		console.log("Action",search);
		yield put(searchChocolateSuccess(search))
		// console.log("action",action);
		// console.log("search output",search)
	}catch(err){
		yield put(searchChocolateFailure(err))
	}
}