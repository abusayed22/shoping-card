import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const { createStore, applyMiddleware } = require("redux");


const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before-State: ${JSON.stringify(store.getState())}`);

    const upComeingState = [action].reduce(rootReducer, store.getState());

    console.log(JSON.stringify(upComeingState))

    return next(action)
}

const store = createStore(rootReducer, (applyMiddleware(logger, myLogger)))
export default store;