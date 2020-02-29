import { FETCH_PREDICTION, PredictionActionTypes } from "./types";

export function fetchPrediction(predictionId: number): PredictionActionTypes {
  return {
    type: FETCH_PREDICTION,
    payload: predictionId
  }
}
