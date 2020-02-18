import React from "react";
import { NavLink } from "react-router-dom";
import "./overview.css";
import RandomImage from "./randomImage";

function Overview(props) {
  return (
    <div className="entryContainer">
      {props.blogEntries.map(blogEntry => (
        <div>
          <RandomImage></RandomImage>
          <NavLink
            class="navLink"
            key={blogEntry.id}
            to={`/blogEntry/${blogEntry.id}`}
          >
            <div class="overviewEntry">{blogEntry.title}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Overview;
