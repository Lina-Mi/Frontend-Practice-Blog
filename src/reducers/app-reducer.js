import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogiut: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
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
