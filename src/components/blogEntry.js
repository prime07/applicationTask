import React from "react";
import "./blogEntry.css";

function BlogEntry(props) {
  return (
    <div className="BlogEntry">
      <div>{props.title}</div>
    </div>
  );
}

export default BlogEntry;
