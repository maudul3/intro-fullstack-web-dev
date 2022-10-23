const { create } = require("domain");
const http = require("http");
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const routes = [
    "/attributes?hello=world&lorem=ipsum",
    "/items?first=1&second=2&third=3&fourth=4",
    "/characters?spongebob=squarepants&patrick=star&sandy=cheeks",
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = "";

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  let createTable = (res, url) => {
    res.write(`<table border="1">`);
    url.searchParams.forEach((value, key) => {
      res.write("<tr>");
      res.write(`<td>${key}</td>`);
      res.write(`<td>${value}</td>`);
      res.write("</tr>");
    });
    res.write("</table>");
  };

  if (req.url === "/") {
    let routeResults = getRoutes();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Exercise 02</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
  } else if (url.pathname === "/attributes") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Attributes</h1>");
    createTable(res, url);
    res.end();
  } else if (url.pathname === "/items") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Items</h1>");
    createTable(res, url);
    res.end();
  } else if (url.pathname === "/characters") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Characters</h1>");
    createTable(res, url);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("There's nothing here :(");
    res.end();
  }

  // Add your code here

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
