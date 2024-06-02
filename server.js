import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import portfolioRoutes from "./portfolioRoute.js";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";
const PORT = process.env.PORT || 8080;
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./frontend/build')));
app.use("/api/v1/portfolio", portfolioRoutes);

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});