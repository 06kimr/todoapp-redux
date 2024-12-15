import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { todoSaga } from "./sagas/todoSaga";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

function createStore() {
  function* rootSaga() {
    yield all([todoSaga()]);
  }
  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
  });

  sagaMiddleware.run(rootSaga)

  return store;
}

const store = createStore();

export default store;

export type RootState = ReturnType<typeof store.getState>  ;
export type AppDispatch = typeof store.dispatch