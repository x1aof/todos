import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends Component {
    state = {todos:[
      {id : '001', name: 'wefghj', done: true},
      {id : '002', name: 'wefghjsgx', done: true},
      {id : '003', name: 'wefghjwdaghjk', done: false}
    ]}
  updateTodo = (id, done)=>{
    const{todos} = this.state
    const newTodos = todos.map((todoOb)=>{
      if(todoOb.id === id) return {...todoOb, done}
      else return todoOb
    })
    this.setState({todos:newTodos})
  }

  addTodo =(todoObj) =>{
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos:newTodos})
  }

  deleteTodo=(id)=>{
    const{todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo=(done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return{...todoObj, done}
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
    <div className="todo-container">
    <div className="todo-wrap">
      <Header addTodo={this.addTodo}/>
      <List todoz = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
      <Footer todos={todos} checkAllTodo={this.checkAllTodo}/>
    </div>
  </div>
    )
  }
}
