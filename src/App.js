import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      //set up router
      <Route path="/" component={Projects}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/about" component={About}/>

      <div className='navigation'>
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation-sub">

          //links to pages
          <Link to="/" className="item">Projects</a>
          <Link to="/articles" className="item">Articles</a>
          <Link to="/about" className="item">About</a>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
