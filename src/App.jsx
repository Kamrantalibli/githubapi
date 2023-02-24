import React, { Component } from 'react'
import data from './data'
class App extends Component {
  

  constructor(){
    super();
    this.state = {
      // image: " ",
      userLogin: "",
      userPassword: "",
      message: "",
      image: " "
    }

    // console.log("const ise dusduu..");
    // this.increment = () =>{
    //   this.setState({image: "https://images.unsplash.com/photo-1677002423143-4e6522062851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"})
    // }

    // this.decrement = () =>{
    //   this.setState({image: "https://plus.unsplash.com/premium_photo-1663051010000-39d67a331015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})
    // }

    this.mysubmit = (e) => {
      e.preventDefault();
      if (!this.state.userLogin || !this.state.userPassword) {
        this.setState({message: "pls fill input"});  
      }else{
        if (this.state.userLogin == data.login && this.state.userPassword == data.password) {
          this.setState({
            message: "Login success",
            image: "https://images.unsplash.com/photo-1677002423143-4e6522062851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          });
        }
        else{
          this.setState({
            message: "Login wrong",
            image: "https://plus.unsplash.com/premium_photo-1663051010000-39d67a331015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          });
        }
      }
      
    }


    
  }
  //LifeCycle
  // componentDidMount() {
  //   console.log("componentDidMount ise dusdu...");  
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate ise dusdu...");
  //   const btn = document.querySelector("#btn");
  //   btn.style.color = "#fff"
  //   btn.style.background = "red"
  // }
  
  

  render() {
    return (
      <>
        {/* <button id='btn' onClick={this.decrement}>-</button>
           
        <img src={this.state.image} alt=""/>
           
        <button onClick={this.increment}>+</button> */}




       <form onSubmit={this.mysubmit}>
        <input type="text" onChange={(e) => {this.setState({ userLogin: e.target.value })}}/>
        <input type="password" onChange={(e) => {this.setState({ userPassword: e.target.value })}} />
        <button type='submit'>Log in</button>
       </form>
        <h1>{this.state.message}</h1>
        <img src={this.state.image} alt="" />
      </>
    )
  }
}

export default App
