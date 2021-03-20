import Register from './components/Register/Register';
import Register2 from './components/Register/Register2';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Nagivation';
import 'tachyons';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      route: 'home'
    };
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render(){
    let { route } = this.state;
    return (
      <>
      <Navigation onRouteChange={this.onRouteChange} />

        {route === 'home' ?
        <>
          <h1>home</h1> 
          <button onClick={() =>this.onRouteChange('mentor')}>Register as a mentor</button>
          <button onClick={() => this.onRouteChange('register')}>Register </button>
          </>: 
          route === 'mentor'? 
          <Register2 onRouteChange={this.onRouteChange}/> :
          route === 'register' ?
          <Register onRouteChange={this.onRouteChange}/>:
          route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange}/>:
          <h1>Erroe page</h1>
          }
      </>
    );
  }
}

export default App;
