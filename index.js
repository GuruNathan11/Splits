const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const mongodb = require('./Config/mongoConfig');
const apiRoutes = require('./Routes/routes.js');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.set('strictQuery', false);
const db = mongoose.connect(mongodb.MONGO_URI)
db.then(() => console.log("DB Connected successfully"))
.catch(error => console.log("Failed to connect with DB",error))


    var port = process.env.PORT || 3030
    app.listen(port,() => {console.log("App listening on port",port)});

    app.get("/", (req,res) => res.send ("Welcome to Splits API"));

    app.use("/config/splits",apiRoutes);
    

    module.exports = app ;