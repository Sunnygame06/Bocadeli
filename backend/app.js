import express from "express"
import customerRoutes from "./src/routes/customer.js"
import productsRoutes from "./src/routes/product.js"

const app = express();

app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/products", productsRoutes);

export default app;