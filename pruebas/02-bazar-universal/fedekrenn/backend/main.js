import express from "express";
import itemRouter from "./src/api/routes/item.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ['https://bazar-universal-woad.vercel.app', 'http://localhost:5173'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api/items", itemRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hi! Welcome to Bazar API, please use the next routes",
    route1: "/api/items/ to see all products",
    route2: "/api/items/:id to see a specific product",
    route3: "/api/items?q=:query to see products of a specific category",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
