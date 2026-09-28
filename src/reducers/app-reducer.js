import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogiut: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogiut: !state.wasLogiut,
			};
		default:
			return state;
	}
};
