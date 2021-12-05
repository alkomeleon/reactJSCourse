import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { chatReducer } from "./chat";
import { messagesReducer } from "./messages";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {gistsReducer} from "./gists";
import {sessionReducer} from "./session";

export const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducer = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer,
    gists: gistsReducer,
    session: sessionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);