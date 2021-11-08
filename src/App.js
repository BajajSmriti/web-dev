import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import HelloWorld from './components/a6/HelloWorld';
import Practice from './components/a7/Practice/index';
import Build from './components/a7/Build/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Practice6 from './components/a6/Practice/index';
import Build6 from './components/a6/Build/index';
import HomeScreen6 from './components/a6/Build/HomeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Route path={["/", "/a6/hello"]} exact={true}>
          <HelloWorld />
        </Route>
        <Route path={["/a6", "/a6/practice"]} exact={true}>
          <Practice6 />
        </Route>
        <Route path="/a6/build/explore" exact={true}>
          <Build6 />
        </Route>
        <Route path="/a6/build/home" exact={true}>
          <HomeScreen6 />
        </Route>
        {/* A7 begins below*/}
        <Route path={["/","/a7", "/a7/practice"]} exact={true}>
          <Practice />
        </Route>
        <Route path="/a7/twitter" >
          <Build />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
