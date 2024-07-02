 import React from "react";
 import { Component } from "react";
 export default class App extends Component
 {
 constructor(){
  super();
  console.log("component called")
  this.state = {
    count : 0
  }
 }
 componentDidMount()
 {
  console.log("Mounting Happened");
 }
 shouldComponentUpdate(){
  console.log("Should component update")
  return true
 }
 componentDidUpdate(){
  console.log('Component Upadated')
 }
 getSnapshotBeforeUpdate(){
  console.log("Get shnapshot update")
 }
 
  render(){
    return (
      <div className="bg-con">
      <div className="bg-inside" >
      <h3>Count:{this.state.count} </h3>
       <button onClick={()=>this.setState((state)=>{
        return {
          count:state.count+1
        }
        })}>+</button>
      </div>
    </div>
    )
   
  }
 }
