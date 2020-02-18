import React from "react";
import { Switch, Route } from "react-router-dom";
import Overview from "./overview";
import BlogEntry from "./blogEntry";
function Content(props) {
  return (
    <Switch>
      <Route exact path="/" render={() => <Overview {...props} />} />
      <Route exact path="/blogEntry/:blogEntryID" component={BlogEntry} />
    </Switch>
  );
}

export default Content;
