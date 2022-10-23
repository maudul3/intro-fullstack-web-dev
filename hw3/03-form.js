const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
let lastPost = "";

const server = http.createServer((req, res) => {
  req.on("data", (chunk) => {
    lastPost += chunk;
    console.log("on data: " + lastPost);
  });

  if (req.url === "/form") {
    lastPost = "";
    res.writeHead(200, { "Content-Type": "text/html" });
    const formHTML = `
    <form method="post">
     Username: <input name="username"><br>
     Email: <input name="email"><br>
     <input type="submit">
    </form>`;
    res.write(formHTML);
    res.end();
  } else if (req.url === "/submit") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>");
    lastPost.split("&").forEach((el) => {
      console.log(el);
      key = el.split("=")[0];
      val = el.split("=")[1];
      res.write(`${key}: ${val}<br>`);
    });
    res.write("<p>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
