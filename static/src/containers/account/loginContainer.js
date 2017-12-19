import LoginForm from '../../components/account/Login.js'
import { connect } from 'react-redux'

const mapStateToProps = ( dispatch ) => {
    return {

    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapStateToProps)(LoginForm)
