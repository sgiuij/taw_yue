import * as types from "./types"

export function loadWHSuccess(apps) {
	return { type: types.LOAD_WH_SUCCESS, apps }
}
