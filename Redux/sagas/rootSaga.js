import {takeLatest} from 'redux-saga/effects';
import ACTION from '../action/actionTypes';
import * as ImageSaga from "./imageSaga";

export function* rootSaga() {
        yield takeLatest(ACTION.GET_ALL_IMAGE, ImageSaga.getAllImagesSaga);
}
