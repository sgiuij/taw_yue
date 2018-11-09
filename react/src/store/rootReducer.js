import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

import warehouse from "./Warehouse/reducer"
import user from "./Users/reducer"

export const rootReducer = combineReducers({
	warehouse,
	user,
	appForm: formReducer
})
