import React,{Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../../components/common/Input'

const InputNameContainer = () => (
    <Input type={'text'} name={'name'} placeholder={'手机号或邮箱'}/>
)

InputNameContainer.propTypes = {

}

export default InputNameContainer
