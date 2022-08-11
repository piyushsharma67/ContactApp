import {
    combineReducers,
    AnyAction,
    Reducer,
    configureStore,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import ContactReducer from '../reducers/reducer';
const reducers = combineReducers({
    ContactReducer
});
  
export type RootState = ReturnType<typeof reducers>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
if (action.type === 'logout') {
    state = {} as RootState;
}
return reducers(state, action);
};

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()


export const store = configureStore(
{
    reducer:rootReducer,
    middleware:[thunk],
    devTools:true
}
);
