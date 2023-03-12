import {createStore, compose, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {rootreducer} from "./root-reducer";
import axios from "axios";
import * as api from '../config'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootreducer,composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      client:axios,
      api
    })
  )
))