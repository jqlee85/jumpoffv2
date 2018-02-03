import React from 'react';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    props: {},
    component: About
  },
  {
    path: "/blog",
    props: {},
    component: Blog
  },
];

export default routes;
