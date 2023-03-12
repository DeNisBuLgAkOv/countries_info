import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme-reducer";


export const rootreducer = combineReducers({
  theme:themeReducer
})