import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

import { mySaga } from "./sagas";

const sagMiddleWare = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagMiddleWare));
sagMiddleWare.run(mySaga);
