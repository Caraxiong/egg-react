import * as types from './ActionTypes'

function updateArea(area) {
	return {
		type: types.UPDATEAREA,
		payload: area
	}
}

function getAreaData(data) {
	return {
		type: types.GETAREADATA,
		payload: data
	}
}

export {
	updateArea,
	getAreaData,
}