import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import'./index.css'

export default class List extends Component {


  static propTypes = {
    todoz:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired
  }
  render() {
    const{todoz,updateTodo,deleteTodo} = this.props
    return (
        <ul className="todo-main">
         {
           (todoz).map( todo =>{
             return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
           })
         }
        </ul>
    )
  }
}
