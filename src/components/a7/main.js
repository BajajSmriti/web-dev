import React from "react";
import Build from "./Build";
import Practice from "./Practice";
import {Route} from 'react-router-dom';

const A7 = () => {
  return (
      <>
        <Route path={["/a7", "/a7/practice"]} exact={true}>
          <Practice />
        </Route>
        <Route path="/a7/twitter" >
          <Build />
        </Route>
      </>
  )
};

export default A7;