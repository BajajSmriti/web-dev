import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import A6 from './components/a6/main';
import A7 from './components/a7/main';
import A8 from './components/a8/main';
import A9 from './components/a9/main';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" exact={true}>
          <Main />
        </Route>
        <Route path="/a6">
          <A6 />
        </Route>
        <Route path="/a7" >
          <A7 />
        </Route>
        <Route path="/a8" >
          <A8 />
        </Route>
        <Route path="/a9" >
          <A9 />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
