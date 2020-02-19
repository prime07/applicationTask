import React, { Component } from "react";
import Axios from "axios";
import Content from "./components/content";
import Header from "./components/header";
import BlogContext from "./components/blogContext";
import { BlogDataContext } from "./data-context";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], user: { name: "", website: "" } };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts/").then(res =>
      this.setState({ data: res.data })
    );
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
