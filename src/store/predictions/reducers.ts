import { PredictionState, PredictionActionTypes, FETCH_PREDICTION, FETCH_PREDICTION_SUCCESS, FETCH_PREDICTION_FAILURE } from "./types";

const initialState: PredictionState = {
  prediction: {
    id: 0
  },
  fetching: false,
  hasFetchingError: false
}

export function predictionsReducer(
    state = initialState,
    action: PredictionActionTypes
  ): PredictionState {
    switch (action.type) {
      case FETCH_PREDICTION:
        return {
          ...state,
          prediction: {
            id: action.payload
          },
          fetching: true,
          hasFetchingError: false
        }
      case FETCH_PREDICTION_SUCCESS:
        return {
          ...state,
          fetching: false,
          hasFetchingError: false,
          prediction: action.payload
        }
      case FETCH_PREDICTION_FAILURE:
        return {
          ...state,
          fetching: false,
          hasFetchingError: true
        }
      default:
        return state
    }
  }