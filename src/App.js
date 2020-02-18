import React, { Component } from "react";
import "./App.css";
import Content from "./components/content";
import { BlogDataContext } from "./data-context";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], user: { name: "", website: "" } };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <BlogDataContext.Provider
        value={{
          state: this.state.data,
          updateUser: user => {
            this.setState({
              user: { name: user.name, website: user.website }
            });
          }
        }}
      >
        <div className="App">
          <div className="container">
            <div className="header">Header</div>
            <div className="content">
              <Content blogEntries={this.state.data}></Content>
            </div>
            <div className="context">{this.state.user.name}</div>
            <div className="footer">Footer</div>
          </div>
        </div>
      </BlogDataContext.Provider>
    );
  }
}

export default App;
