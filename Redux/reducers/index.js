import {combineReducers} from "redux";
import imageReducer from "./imageReducer";

const appReducer = combineReducers({
    imageReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;