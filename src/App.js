import React, { Component } from "react";
import "./App.css";
import BlogEntry from "./components/blogEntry";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">Header</div>
          <div className="content">
            {this.state.data.map(blogEntry => (
              <BlogEntry title={blogEntry.title}></BlogEntry>
            ))}
          </div>
          <div className="context">Content</div>
          <div className="footer">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
