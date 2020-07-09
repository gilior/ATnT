var express = require("express");
var app = express();


app.get("/api/user/:id", (req, res, next) => {
    res.json({user:{id: 10, fname: "israel", lname: "israeli"}});
});



function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}



app.get("/api/user/:id/infections", (req, res, next) => {
    const arr = [];
    for (let i = 0; i < 10000; i++) {
        arr.push({location: {lon: i, lat: 10000 - i}, datetime: randomDate(new Date(1990, 0, 1), new Date())
        })
    }
    res.json({infections: arr});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
