const { combineReducers } = require("redux");
const { default: cartReducers } = require("./shoping cart/cartReducers");

const rootReducer = combineReducers({
    cart: cartReducers
});

export default rootReducer;