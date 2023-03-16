import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from "./ArticleList";
import logo from '../assets/logo.svg';
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} logo={logo} />
      <About image={logo} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
