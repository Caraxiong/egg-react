import React,{Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../../components/common/Input'

const InputPswContainer = () => (
    <Input type={'text'} name={'password'} placeholder={'密码'}/>
)

InputPswContainer.propTypes = {

}

export default InputPswContainer
