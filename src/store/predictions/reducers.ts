import { PredictionState, PredictionActionTypes, FETCH_PREDICTION, FETCH_PREDICTION_SUCCESS } from "./types";

const initialState: PredictionState = {
  prediction: {
    id: 0
  },
  fetching: false
}

export function predictionsReducer(
    state = initialState,
    action: PredictionActionTypes
  ): PredictionState {
    switch (action.type) {
      case FETCH_PREDICTION:
        return {
          ...state,
          fetching: true
        }
      case FETCH_PREDICTION_SUCCESS:
        return {
          ...state,
          fetching: false,
          prediction: action.payload
        }
      default:
        return state
    }
  }