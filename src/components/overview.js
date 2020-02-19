import React from "react";
import { NavLink } from "react-router-dom";
import RandomImage from "./randomImage";
import "../css/overview.css";

function Overview(props) {
  return (
    <div className="entryContainer">
      {props.blogEntries.map(blogEntry => (
        <div style={{ width: "230px", margin: "auto" }} key={blogEntry.id}>
          <RandomImage></RandomImage>
          <NavLink className="navLink" to={`/blogEntry/${blogEntry.id}`}>
            <div className="overviewEntry">{blogEntry.title}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Overview;
