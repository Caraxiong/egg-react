import { connect } from 'react-redux'
import List from '../../components/home/List.js'

const mapStateToProps = ( state ) => ({
	list: state.list
})

const ListContainer = connect(
	mapStateToProps
)(List)

export default ListContainer