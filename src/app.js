let express = require("express");
let morgan = require("morgan");
let serverless = require("serverless-http")
let port = 3000;
let host = "localhost";
const app = express();

let router = express.Router()

app.set("view engine","ejs");
app.use(express.static("public"))
app.use(morgan("tiny"));

router.get("/", (req, res, next)=> {
    res.json({
        hello: "hi"
    });
});
app.use("/.netlify/functions/app",router )
module.exports = app;
module.exports.handler = serverless(app)
// app.listen(port, host, ()=>{
//     console.log("Server is running on port "+ port)
// })