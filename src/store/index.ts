import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import FieldSLice from "./slices/AnalizeListSlice";
import ResultSLice from "./slices/resultSlice";

const rootReducer = combineReducers({
  FieldSLice,
  ResultSLice
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']