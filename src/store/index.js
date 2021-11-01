import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { chatReducer } from "./chat";
import { messagesReducer } from "./messages";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);