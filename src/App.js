
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  
  state={
    progress:10
  }
  pageNumber=30
  api_key=process.env.REACT_APP_NEWS_API
 
  setProgress=(progress)=>{
   this.setState({
    progress:progress
   })
  }
  
  render() {
    return ( 
      <div>
        
       <Router>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
       <Routes>
       
       <Route exact path="/" element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='general'/>} />
       <Route exact path="/business" element={<News  setProgress={this.setProgress} key="business" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='business'/>} />
       <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='entertainment'/>} />
       <Route exact path="/general" element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='general'/>} />
       <Route exact path="/health" element={<News  setProgress={this.setProgress} key="health" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='health'/>} />
       <Route exact path="/science" element={<News  setProgress={this.setProgress} key="science" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='science'/>} />
       <Route exact path="/sports" element={<News  setProgress={this.setProgress} key="sports" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='sports'/>} />
       <Route exact path="/technology" element={<News  setProgress={this.setProgress} key="technology" pageSize={this.pageNumber} country='in' api_key={this.api_key} category='technology'/>} />

       
       </Routes>
       </Router>
      </div>
    )
  }
}


