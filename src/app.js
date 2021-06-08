import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import pkg from "../package.json";

const app = express();

import RoutesControl from "./routes/routecontrol.routes";
import RouteContact from "./routes/routeContact.routes";

const corsOptions = {
  origin: "http://localhost:8069",
};

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("pkg", pkg);

app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api", RoutesControl);

app.use("/contacto", RouteContact);

export default app;
