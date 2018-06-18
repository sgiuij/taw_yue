/**
 * Warehouse Reducer
 */
import initialState from "../../store/initialState"
import * as types from "./types"

export default function whReducer(state = initialState.warehouse, action) {
	switch (action.type) {
		case types.LOAD_WH_SUCCESS:
			return {
				...state,
				apps: action.apps.apps
			}
		default:
			return state
	}
}
