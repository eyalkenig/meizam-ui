import { RootState } from '../';

// Pass the selector to the useSelector hook inside any functional component in
// order to get the state chunk - instead of connect hoc
export const userSelector = (state: RootState) => state.user;

export const userGroupsSelector = (state: RootState) =>
	userSelector(state).groups;
