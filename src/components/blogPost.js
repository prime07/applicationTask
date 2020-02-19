import React from "react";
import { BlogDataContext } from "../data-context";
import RandomImage from "./randomImage";
import Axios from "axios";
import "../css/blogPost.css";

class BlogPost extends React.Component {
  constructor() {
    super();
    this.state = { blogEntry: {} };
  }

  static contextType = BlogDataContext;

  // After being mounted, this component fetches data about a single blogpost
  // with the blogpost id out of the the url params
  // As soon as the data about the blogpost is received and stored in state, the
  // data about the author is fetched and stored in the global context
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

  // To clear the context component, the blogpost author data will be cleared in
  // the global context when the user leaves the detailed blogpost page
  componentWillUnmount() {
    this.context.updateUser({ name: "", website: "" });
  }

  // The component displays the blogpost data along with a random image
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

export default BlogPost;
