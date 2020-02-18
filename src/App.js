import React, { Component } from "react";
import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import BlogContext from "./components/blogContext";
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
    const { data, user } = this.state;
    return (
      <BlogDataContext.Provider
        value={{
          state: data,
          updateUser: user => {
            this.setState({
              user: { name: user.name, website: user.website }
            });
          }
        }}
      >
        <React.Fragment>
          <Header />
          <div className="container">
            <div className="content">
              <Content blogEntries={data}></Content>
            </div>
            <div className="context">
              <BlogContext author={user.name} website={user.website} />
            </div>
            <div className="footer">
              <p>© 2020 by Marius Rhein</p>
              <p>marius.rhein@outlook.com</p>
            </div>
          </div>
        </React.Fragment>
      </BlogDataContext.Provider>
    );
  }
}

export default App;
