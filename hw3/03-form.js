const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

// Using a variable to transfer form data between routes
let lastPost = "";

const server = http.createServer((req, res) => {
  // Add form data to variable
  req.on("data", (chunk) => {
    lastPost += chunk;
    console.log("on data: " + lastPost);
  });

  // Write form
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
    // Write out form data
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
  // 404
  else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.write("Error: you chose wrong...");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
