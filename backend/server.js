
//require() -> this is a built in function used to import modules , local files , etc...
const express = require("express");
//we are using cors to allow frontend and backend to communicate with each other
const cors = require("cors");
//importing .env file to access environment variables
require("dotenv").config();


//importing database connection and ticket routes
const db = require("./config/db");
//we are importing all the tickets API here 
const ticketRoutes = require("./routes/ticketRoutes");
//now app is attached with everything over here  & this creates a express applcation
const app = express();

app.use(cors());
//this is a middleware that allows us to parse incoming JSON requests and make the data available in req.body
//without req.body it will return undefinedd
app.use(express.json());

app.use("/api/tickets", ticketRoutes);  
const PORT = process.env.PORT || 5000;

//select 1 act as a ping to check if the database is connected or not
db.query("SELECT 1")
  .then(() => {
    console.log("✅ Database Connected");
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err);
  });

//req - client sends the data
//res- server responds to the client
app.get("/", (req, res) => {
  res.send("AI Support Ticket Analyzer API is Running 🚀");
});
//without listen the server will not start and it will not listen to any requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});