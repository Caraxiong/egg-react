import * as types from './ActionTypes'

function updateArea(area) {
	console.log('area',area)
	return {
		type: types.UPDATEAREA,
		payload: area
	}
}

function getAreaData(data) {
	console.log('data',data)
	return {
		type: types.GETAREADATA,
		payload: data
	}
}

export {
	updateArea,
	getAreaData,
}