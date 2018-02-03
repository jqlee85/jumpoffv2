import React from 'react';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

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
  {
    path: "/work",
    props: {},
    component: Work
  },
];

export default routes;
