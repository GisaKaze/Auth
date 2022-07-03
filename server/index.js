require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
swaggerDocument = require("./swagger.json");

const swaggerSpecification = swaggerJsDoc(swaggerDocument);
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());    

// routes
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
