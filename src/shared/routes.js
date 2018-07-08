import React from 'react';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import SinglePost from "./components/SinglePost/SinglePost";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Resume from "./components/Resume/Resume";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    props: {},
    component: About
  },
  {
    path: "/blog/:post_slug",
    props: {},
    component: SinglePost
  },
  {
    path: "/blog",
    exact: true,
    props: {},
    component: Blog
  },
  {
    path: "/work",
    exact: true,
    props: {},
    component: Work
  },
  {
    path: "/resume",
    props: {},
    component: Resume
  }
];

export default routes;
