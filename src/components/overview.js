import React from "react";
import { Link } from "react-router-dom";

function Overview(props) {
  return (
    <React.Fragment>
      {props.blogEntries.map(blogEntry => (
        <Link key={blogEntry.id} to={`/blogEntry/${blogEntry.id}`}>
          <div>{blogEntry.title}</div>
        </Link>
      ))}
    </React.Fragment>
  );
}

export default Overview;
