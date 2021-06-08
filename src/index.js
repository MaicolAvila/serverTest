import app from "./app";
import "./database";

const port = 8070;

app.listen(port);

console.log("Server on port", port);
