import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogPostOverview from "./blogPostOverview";
import BlogPost from "./blogPost";

function BlogContent(props) {
  return (
    <Switch>
      <Route exact path="/" render={() => <BlogPostOverview {...props} />} />
      <Route exact path="/blogEntry/:blogEntryID" component={BlogPost} />
    </Switch>
  );
}

export default BlogContent;
