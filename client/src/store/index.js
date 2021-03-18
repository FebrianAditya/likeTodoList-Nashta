import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initialState = {
    events: []
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case "GET_DATA":
            return {...state, events: action.payload}
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store