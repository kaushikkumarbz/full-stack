import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './Pages/About';
import Home from './Pages/Home';
import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './Component/Post';



function App() {

  let [data , setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
        {
            data.map( (post, index) =>{
              return  <Post userId={post.userId}  id ={post.id} title={post.title} body={post.body} />
            })
        }
    </div>
  );
}

export default App;


/*

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import NotFound from './Component/NotFound';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
*/
