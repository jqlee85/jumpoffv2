import React from 'react';
import Home from "./components/Home/Home";
import About from "./components/About/About";

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
  }
];

export default routes;
