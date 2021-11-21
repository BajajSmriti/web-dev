import React from "react";
import Build from "./Build";
import Practice from "./Practice";
import {Route} from 'react-router-dom';

const A8 = () => {
  return (
      <>
        <Route path={["/a8", "/a8/practice"]} exact={true}>
          <Practice />
        </Route>
        <Route path="/a8/twitter" >
          <Build />
        </Route>
      </>
  )
};

export default A8;