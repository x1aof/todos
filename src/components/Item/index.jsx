import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../Item'
import'./index.css'
export default class Item extends Component {

  state = {mouse:false}

  //鼠标移入移出改变颜色的回调
  handleMouse = (f)=>{
    return ()=>{
      this.setState({mouse:f})
    }
  }
  //勾选todo的回调
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id, event.target.checked);
    }
  }
  //删除todo的回调
  handleDelete = (id)=>{
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
    
  }

  render() {
    const {mouse} = this.state
    const {id, name, done} = this.props
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
          <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name}</span>
          </label>
          <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style= {{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
