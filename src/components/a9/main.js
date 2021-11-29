import React from "react";
import Build from "./Build";
import Practice from "./Practice";
import {Route} from 'react-router-dom';

const A9 = () => {
  return (
      <>
        <Route path={["/a9", "/a9/practice"]} exact={true}>
          <Practice />
        </Route>
        <Route path="/a9/twitter" >
          <Build />
        </Route>
      </>
  )
};

export default A9;
