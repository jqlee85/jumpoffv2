import "babel-polyfill";
import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { ApolloProvider } from 'react-apollo';
import client from '../shared/graphql/apolloClient'
import { StaticRouter, matchPath } from "react-router-dom";
import App from "../shared/App";
import "source-map-support/register";

// import expressStaticGzip from "express-static-gzip";

const app = express();

app.use(cors());
app.use(express.static("public"));
// app.use("/", expressStaticGzip("/public/"));

//Handle Gzips
// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.get("*", (req, res, next) => {

  const context = {};
  const markup = renderToString(
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="manifest" href="/manifest.json">
        <link rel="shortcut icon" href="/favicon.ico">
        <style>@import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,300i,600');</style>
        <title>JumpOff Web Development</title>
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${markup}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);

  
});


// Favicon
// app.use(favicon(__dirname +'../../public/favicon.ico'));
const thePort = process.env.JUMPOFF_PORT || 3002;

app.listen(thePort, () => {
  var date = new Date();
  console.log( process.env.NODE_ENV + " server started at " + date + " on port: " + thePort );
});