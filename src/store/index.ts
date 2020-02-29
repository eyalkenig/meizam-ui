import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { groupReducer } from './groups/reducers';
import { predictionsReducer } from './predictions/reducers';

export const rootReducer = combineReducers({
	user: userReducer,
	groups: groupReducer,
	prediction: predictionsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
