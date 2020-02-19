import React, { Component } from "react";
import Axios from "axios";
import BlogContent from "./components/blogContent";
import Header from "./components/header";
import BlogPostContext from "./components/blogPostContext";
import { BlogDataContext } from "./data-context";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], user: { name: "", website: "" } };
  }

  // If the App is mounted, all blogposts will be fetched and stored in state
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts/").then(res =>
      this.setState({ data: res.data })
    );
  }

  render() {
    const { data, user } = this.state;
    return (
      // Render all components (Header, content, context and footer), wrapped in
      // a global context
      // The context is necessary to make the information about the blogpost
      // author available from the content component to the context component
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
              <BlogContent blogEntries={data}></BlogContent>
            </div>
            <div className="context">
              <BlogPostContext author={user.name} website={user.website} />
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
