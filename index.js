import express from "express";
import sampleRoute from "./src/routes/sample.route.js";
import cors from "cors";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { connectToMongoDB } from "./src/db/mongo.db.js";
import { seedUserData } from "./src/db/seed.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const port = 4000;
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors
app.use(cors())
//routes
app.use("/app/v1", sampleRoute);


//views
app.set("view engine", "ejs");//tells the express to use ejs as the view engine
app.set("views", path.join(__dirname, "src/views"));//tells the express where to find the views
app.use(express.static(path.join(__dirname, "public")));//helps to serve static files like css,js,images


connectToMongoDB().then(async () => {
    console.log("Db is connected successfully ")
    await seedUserData();
}).catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});