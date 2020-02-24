import { combineReducers } from 'redux';
import { userReducer } from './user/reducers';
import { groupReducer } from './groups/reducers';

export const rootReducer = combineReducers({
	user: userReducer,
	groups: groupReducer
});

export type RootState = ReturnType<typeof rootReducer>;
