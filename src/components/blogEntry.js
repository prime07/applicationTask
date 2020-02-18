import React from "react";
import "./blogEntry.css";
import { BlogDataContext } from "../data-context";

class BlogEntry extends React.Component {
  static contextType = BlogDataContext;
  render() {
    const blogEntry = this.context.find(
      blogEntry => blogEntry.id == this.props.match.params.blogEntryID
    );
    return (
      <div className="BlogEntry">
        <div>
          <h2>{blogEntry.title}</h2>
          <p>{blogEntry.body}</p>
        </div>
      </div>
    );
  }
}

export default BlogEntry;
