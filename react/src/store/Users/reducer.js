import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "./types"

import initialState from "../../store/initialState"

export default function auth(state = initialState.user, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        user: {
          isFetching: true,
          isAuthenticated: false,
          creds: action.creds
        }
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: {
          isFetching: false,
          isAuthenticated: true,
          errorMessage: ""
        }
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        user: {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.message
        }
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        user: {
          isFetching: true,
          isAuthenticated: false
        }
      })
    default:
      return state
  }
}
