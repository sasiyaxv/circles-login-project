import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import { mySaga } from "./sagas";

const sagMiddleWare = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagMiddleWare);

const composedEnhancers = composeWithDevTools(...[middlewareEnhancer]);

export default createStore(rootReducer, composedEnhancers);
sagMiddleWare.run(mySaga);
