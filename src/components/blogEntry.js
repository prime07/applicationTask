import React from "react";
import "./blogEntry.css";
import { BlogDataContext } from "../data-context";
import RandomImage from "./randomImage";

class BlogEntry extends React.Component {
  constructor() {
    super();
    this.state = { blogEntry: {} };
  }

  static contextType = BlogDataContext;

  componentDidMount() {
    this.setState(
      {
        blogEntry: this.context.state.find(
          blogEntry => blogEntry.id == this.props.match.params.blogEntryID
        )
      },
      () =>
        fetch(
          `http://jsonplaceholder.typicode.com/users/${this.state.blogEntry.userId}`
        )
          .then(res => res.json())
          .then(json =>
            this.context.updateUser({ name: json.name, website: json.website })
          )
    );
  }

  componentWillUnmount() {
    this.context.updateUser({ name: "", website: "" });
  }

  render() {
    return (
      <div className="blogEntry">
        <div>
          <RandomImage width={796} height={300}></RandomImage>
          <h2>{this.state.blogEntry.title}</h2>
          <p>{this.state.blogEntry.body}</p>
        </div>
      </div>
    );
  }
}

export default BlogEntry;
