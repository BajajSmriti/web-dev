import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import HelloWorld from './components/a6/HelloWorld';
import Practice from './components/a6/Practice/index';
import Build from './components/a6/Build/index';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './components/a6/Build/HomeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <h1>Hello World!</h1> */}
        <Route path={["/", "/a6/hello"]} exact={true}>
          <HelloWorld />
        </Route>
        <Route path={["/a6", "/a6/practice"]} exact={true}>
          <Practice />
        </Route>
        <Route path="/a6/build/explore" exact={true}>
          <Build />
        </Route>
        <Route path="/a6/build/home" exact={true}>
          <HomeScreen />
        </Route>
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
