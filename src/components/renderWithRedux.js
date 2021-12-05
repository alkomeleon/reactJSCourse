import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {rootReducer, composeEnhancers} from '../store'
import {applyMiddleware, createStore} from 'redux'
import { render } from "@testing-library/react"
import thunk from 'redux-thunk';

export const renderWithRedux = (component, initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return {
        store,
        ...render(
            <Provider store={store}>
                <BrowserRouter>{component}</BrowserRouter>
            </Provider>
        ),
    };
};
