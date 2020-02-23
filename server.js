require('newrelic');
const express = require('express');
const path = require('path');
var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`App listening on port ${port}!`));

// instead of serving a prewritten index.html file with express.static
// create a route that handles GET requests to the root url
  // in that route handler
    // download the bundle(s) from any service that this proxy is going to SSR // TODO: does this happen in the route??
    // create the HTML markup - the layout - that those bundles and going to render
      // insert that markup as strings into the layout
    // prepare the HTML string that will be sent back to the client
    // send that string as a response to the initial page load