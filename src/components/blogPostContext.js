import React from "react";
import "../css/blogPostContext.css";

// This component receives the blogpost author data as props and renders them
function BlogPostContext(props) {
  return props.author && props.website ? (
    <div className="blogContext">
      <h2>Author</h2>
      <p>{props.author}</p>
      <h2>Website</h2>
      <p>
        <a
          href={"http://" + props.website}
          style={{
            color: "#373737",
            textDecoration: "underline",
            cursor: "pointer"
          }}
        >
          {props.website}
        </a>
      </p>
    </div>
  ) : (
    <React.Fragment />
  );
}

export default BlogPostContext;
