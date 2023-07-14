
import './App.css';

import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

     const App=()=>{
  
 
  const [progress, setProgress] = useState(10)
  const pageNumber=30
  const api_key=process.env.REACT_APP_NEWS_API
 
  
  
 
    return ( 
      <div>
        
       <Router>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
       <Routes>
       
       <Route exact path="/" element={<News  setProgress={setProgress} key="general" pageSize={pageNumber} country='in' api_key={api_key} category='general'/>} />
       <Route exact path="/business" element={<News  setProgress={setProgress} key="business" pageSize={pageNumber} country='in' api_key={api_key} category='business'/>} />
       <Route exact path="/entertainment" element={<News  setProgress={setProgress} key="entertainment" pageSize={pageNumber} country='in' api_key={api_key} category='entertainment'/>} />
       <Route exact path="/general" element={<News  setProgress={setProgress} key="general" pageSize={pageNumber} country='in' api_key={api_key} category='general'/>} />
       <Route exact path="/health" element={<News  setProgress={setProgress} key="health" pageSize={pageNumber} country='in' api_key={api_key} category='health'/>} />
       <Route exact path="/science" element={<News  setProgress={setProgress} key="science" pageSize={pageNumber} country='in' api_key={api_key} category='science'/>} />
       <Route exact path="/sports" element={<News  setProgress={setProgress} key="sports" pageSize={pageNumber} country='in' api_key={api_key} category='sports'/>} />
       <Route exact path="/technology" element={<News  setProgress={setProgress} key="technology" pageSize={pageNumber} country='in' api_key={api_key} category='technology'/>} />

       
       </Routes>
       </Router>
      </div>
    )
  
}

export default App
