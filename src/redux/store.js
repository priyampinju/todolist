// Importing the createStore function to create Redux store
import { createStore } from "redux";
// Importing the reducer function
import rootReducer from "./reducers";

// Redux store with the root reducer
const store = createStore(rootReducer);

// Exporting so that we can use outside the file
export default store;
