import { all,fork } from "redux-saga/effects";

import {DataSaga,CitySaga} from "./saga";

export default  function* rootSaga(){
    yield all([fork(DataSaga),fork(CitySaga)])
}