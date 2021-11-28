import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import NavComponent from './NavComponent';
import Todo from './todo';
import Post from './Post';
import Footer from './footer';
import todo from './todo';


function App() {
  return (
    <div className="container">
      <NavComponent/>
      <Routes>
        <Route path={"/posts"} element={<Post />}/>
        <Route path={"/todo"} element={<Todo />}/>
        </Routes>
        {/*<Footer/>*/}
      

    
    </div>
  );
}

export default App;
