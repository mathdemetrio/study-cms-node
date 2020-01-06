import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import postController from "./controllers/postController.js";
postController(app);

app.listen(3000);
