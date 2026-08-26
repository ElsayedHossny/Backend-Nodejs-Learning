const http = require("node:http");
const fs = require("node:fs");
const port = 3000;

const server = http.createServer((req, res) => {
  try {
    const { url, method } = req;

    if (url === "/home" && method === "GET") {
      res.statusCode = 200;
      res.write("Hello World");
      res.end();
    } else if (url === "/about" && method === "POST") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          message: "About Page",
        }),
      );
      res.end();
    } else if (url === "/users" && method === "GET") {
      const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else if (url === "/users" && method === "POST") {
      let data;
      req.on("data", (chunk) => {
        data = JSON.parse(chunk);
      });
      req.on("end", () => {
        const { name, email, age } = data;

        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

        const isUserExists = users.find((user) => user.email === email);
        if (isUserExists)
          return res.end("User Already Exists please enter another email");

        const newUser = {
          id: users.length + 1,
          name,
          email,
          age,
          is_active: true,
        };

        users.push(newUser);
        fs.writeFileSync("data.json", JSON.stringify(users));

        res.statusCode = 201;
        res.end(`User ${name} added successfully`);
      });
    } else if (url === "/users" && method === "DELETE") {
      let data;
      req.on("data", (chunk) => {
        data = JSON.parse(chunk);
      });
      req.on("end", () => {
        const { email } = data;

        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

        const filteredUsers = users.filter((user) => user.email !== email);

        fs.writeFileSync("data.json", JSON.stringify(filteredUsers));

        res.statusCode = 200;
        res.end(`User ${email} deleted successfully`);
      });
    } else if (url == "/users" && method == "PUT") {
      let data;
      req.on("data", (chunk) => {
        data = JSON.parse(chunk);
      });
      req.on("end", () => {
        const { email, name, age, is_active, id } = data;

        // Read users
        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

        // Get user index
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex < 0) return res.end("User Not Found");

        // Update user
        if (name) users[userIndex].name = name;
        if (age) users[userIndex].age = age;
        if (is_active) users[userIndex].is_active = is_active;
        if (email) {
          const isUserExists = users.find((user) => user.email === email);
          if (isUserExists)
            return res.end("User Already Exists please enter another email");
          users[userIndex].email = email;
        }

        // Save updated user
        fs.writeFileSync("data.json", JSON.stringify(users));

        // Response
        res.statusCode = 200;
        res.end(`User ${email} Updated successfully`);
      });
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
