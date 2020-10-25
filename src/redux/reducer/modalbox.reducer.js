const initialState = {
	show: false,
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_MODAL":
			return {
				...state,
				show: action.value,
			};

		default:
			return state;
	}
};

export default modalReducer;
