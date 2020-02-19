import React from "react";
import "./blogEntry.css";
import { BlogDataContext } from "../data-context";
import RandomImage from "./randomImage";
import Axios from "axios";

class BlogEntry extends React.Component {
  constructor() {
    super();
    this.state = { blogEntry: {} };
  }

  static contextType = BlogDataContext;

  componentDidMount() {
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.blogEntryID}`
    ).then(res =>
      this.setState(
        { blogEntry: res.data },
        function() {
          Axios.get(
            `https://jsonplaceholder.typicode.com/users/${this.state.blogEntry.userId}`
          )
            .then(res => res.data)
            .then(json =>
              this.context.updateUser({
                name: json.name,
                website: json.website
              })
            );
        }.bind(this)
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
          <h2>{this.state.blogEntry.title || ""}</h2>
          <p>{this.state.blogEntry.body || ""}</p>
        </div>
      </div>
    );
  }
}

export default BlogEntry;
