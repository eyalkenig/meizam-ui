import {
	useSelector as defaultSelector,
	shallowEqual,
	TypedUseSelectorHook
} from 'react-redux';
import { RootState } from '../store/index';

const useSelector: TypedUseSelectorHook<RootState> = (selector: any) =>
	defaultSelector(selector, shallowEqual);

export default useSelector;
