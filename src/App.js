import React, { Component } from "react";
import "./App.css";
import Content from "./components/content";
import { BlogDataContext } from "./data-context";

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
      <BlogDataContext.Provider value={this.state.data}>
        <div className="App">
          <div className="container">
            <div className="header">Header</div>
            <div className="content">
              <Content blogEntries={this.state.data}></Content>
            </div>
            <div className="context">Context</div>
            <div className="footer">Footer</div>
          </div>
        </div>
      </BlogDataContext.Provider>
    );
  }
}

export default App;
