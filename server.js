const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: process.env.URL_API || "", // Replace with your API's URL
    changeOrigin: true,
    secure: false,
  })
);

app.listen(3001, () => {
  console.log("Proxy server is running on port 3001");
});
