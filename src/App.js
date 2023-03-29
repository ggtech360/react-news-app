import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {

  pageSize = '9'
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (element) => {
    this.setState({ inputvalue: element.target.value });
  };
  render() {
    return (
      <>
        <Router>
          {/* Navbar Component */}
          <Navbar
            title="G-News24"
            inputvalue={this.state.inputvalue}
            onHandleChange={this.handleInputChange}
          />

          {/* News Component */}
          <Routes>
            {/* General News/home */}
            <Route
              exact
              path="/"
              element={<News key="general" pageSize={this.pageSize} category="general" title="News from all over the world" />}
            />
            {/* Business News */}
            <Route
              exact
              path="/business"
              element={
                <News key="business" pageSize={this.pageSize} category="business" title="Business News" />
              }
            />
            {/* Entertainment News */}
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  category="entertainment"
                  title="Entertainment News"
                />
              }
            />
            {/* Health News  */}
            <Route
              exact
              path="/health"
              element={<News key="health" pageSize={this.pageSize} category="health" title="Health News"/>}
            />
            {/* Science News */}
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize={this.pageSize} category="science" title="Science News" />}
            />
            {/* Sports News */}
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize={this.pageSize} category="sports" title="Sports News" />}
            />
            {/* Technology News */}
            <Route
              exact
              path="/technology"
              element={
                <News key="technology" pageSize={this.pageSize} category="technology" title="Technology News" />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
