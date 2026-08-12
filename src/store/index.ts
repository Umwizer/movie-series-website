
import {configureStore} from   '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import counter from '../slices/increment';
import { tmdbMovie } from '../api/apiSlice';
const reducers = combineReducers({
  counter:counter,
  [tmdbMovie.reducerPath]:tmdbMovie.reducer,
});
export const store = configureStore ({
reducer:reducers,
middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(tmdbMovie.middleware)
}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
