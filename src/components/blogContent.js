import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogPostOverview from "./blogPostOverview";
import BlogPost from "./blogPost";

// This component switches between the two possible content types: the blogpost
// overview and a single blogpost
function BlogContent(props) {
  return (
    <Switch>
      <Route exact path="/" render={() => <BlogPostOverview {...props} />} />
      <Route exact path="/blogEntry/:blogEntryID" component={BlogPost} />
    </Switch>
  );
}

export default BlogContent;
