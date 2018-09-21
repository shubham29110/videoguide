import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import './App.css'
import store from './store'
import Home from './components/Home/home'
import Navbar from './components/Navbar/Navbar'
import Courses from './components/Courses/courses'

class App extends Component {

  render () {
    return (
  
      <Provider store={ store }>
      <BrowserRouter> 
        <div className="App ">
      <Navbar />
         <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/courses' component={Courses} />

    </Switch>
     </div>
        </BrowserRouter>
      </Provider>
      
    )
  }
}

export default App
