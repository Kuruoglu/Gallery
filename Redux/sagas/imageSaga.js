import {put} from 'redux-saga/effects';
import ACTION from '../action/actionTypes';
import * as api from '../../api/apiServises';


export  function* getAllImagesSaga(){
        yield put({type: ACTION.GET_ALL_IMAGE_REQUEST});
        const {data} = yield api.getAllImagesApi();
    try {
        yield put({type: ACTION.GET_ALL_IMAGE_RESPONSE, images: data})
    }catch (e) {
        yield put({type: ACTION.GET_ALL_IMAGE_ERROR, message: 'Something went wrong! Try again later. Sorry, it'})
    }
}

