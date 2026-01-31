import express from "express";
import {
  homeHandler,
  categoryHandler,
  productHandler,
  addProductHandler,
  cartHandler,
} from "./handlers.js";

const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.use(express.static("assets"));
// express.urlencoded

// Router
app.get("/", homeHandler);
app.get("/categories/:id", categoryHandler);
app.get("/products/:id", productHandler);
app.post("/cart/add/:id", addProductHandler);
app.get("/cart", cartHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
