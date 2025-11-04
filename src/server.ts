import express, { Application, Request, Response, NextFunction } from "express";
// import cors from "cors";
import productRoutes from "./routes/productRoutes";
import { importProducts } from "./services/importExternalAPI";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API de Produtos está funcionando!");
});

importProducts()
  .then(() => console.log("Products imported at startup!"))
  .catch((err) => console.error("Error importing products:", err));


app.use("/api",productRoutes);

const PORT: number = Number(process.env.PORT) || 8000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

export default app;
