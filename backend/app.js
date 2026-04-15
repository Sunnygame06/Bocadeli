import express from "express"

const app = express();

app.use(express.json());

app.use("/api/customers");

export default app;