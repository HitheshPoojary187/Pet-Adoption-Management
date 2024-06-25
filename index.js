// imports
const mysql = require("mysql2");
const express = require("express");
const path = require("path");

// initialization
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// configuration
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "hith",
    password: "000000",
    database: "petadoptiondb"
});

// database connection
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected successfully");
        // Start listening for requests after database connection is established
        app.listen(PORT, () => {
            console.log("Server Listening on PORT:", PORT);
        });
    }
});

// API endpoint to fetch pet details
app.get("/getPetDetails", (req, res) => {
    connection.query("SELECT pet.petID, pet.`pet name`,pet.age, pet.description, pet.color, pet.`vaccination status`, breed.`breed name` FROM pet INNER JOIN breed ON pet.breedID = breed.breedID WHERE pet.petID = 1 ORDER BY pet.petID;", function(err, results, fields) {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        // Render the HTML template with pet details
        res.sendFile(path.join(__dirname, 'frontend', 'index.html'), {
            petDetails: results[0]
        });
    });
});
