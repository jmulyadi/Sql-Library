import { useState } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Add from './pages/Add';
import Books from './pages/Books';
import Update from './pages/Update';
import "./style.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Books/>}/>
            <Route path="/add" element = {<Add/>}/>
            <Route path="/update/:id" element = {<Update/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      
  )
}

export default App
