import React, { Component } from 'react'
import { Link, withRouter } from 'react-router';
import  { List } from 'antd-mobile';
import Back from '../back/Back'

const Item = List.Item;
const Brief = Item.Brief;

function link(router) {
  router.push('/no')
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