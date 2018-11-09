import * as actions from "./Warehouse/actions"

export function loadApps() {
	return dispatch =>
		fetch(`http://localhost:3030/taw-hapi/api/1.0/app/list`)
			.then(response => response.json())
			.then(json => dispatch(actions.loadWHSuccess(json)))
			.catch(error => console.log(error))
}
