import {
	GETAREADATA,
	UPDATEAREA
} from '../actions/ActionTypes'
const ACTION_HANDLERS = {
	[UPDATEAREA]: (state, action) => ({
		...state,
		area: action.payload
	}),
	[GETAREADATA]: (state, action) => ({
		...state,
		date: action.payload
	})
}

const initialState = {
	area: '全部区域',
	data: {}
}

export default function listReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]
	return handler ? handler(state, action) : state
}