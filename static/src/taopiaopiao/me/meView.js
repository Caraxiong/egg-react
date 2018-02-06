import React, { Component } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom';
import  { List } from 'antd-mobile';
import Back from '../back/Back'

const Item = List.Item;
const Brief = Item.Brief;

function link() {
  this.setState({redirect: true})
}

const Me = ({router}) => {
  return (
    <section>
      <List>
        <Item extra="" arrow="horizontal" onClick={() => {link(router)}}>one</Item>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>two</Item>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>three</Item>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>four</Item>
      </List>
    </section>
  )
}

export default withRouter(Me)