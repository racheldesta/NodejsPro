const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: black;
            color: white;
            text-align: center;
            padding-top: 50px;
          }
          h1 {
            background-color: #ffc107;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <h2> you are seeing this from node js </h2>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});