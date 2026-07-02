const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
    { id: 1, name: 'sabana mam', email: 'sabana@gamil.com' },
    { id: 2, name: 'sabnur mam', email: 'sabnur@gamil.com' },
    { id: 3, name: 'salman mam', email: 'salman@gamil.com' }
]

app.get("/", (req, res) => {
    res.send('user management is running');
})
app.get("/users", (req, res) => {
    res.send(users);
})
app.post("/users", (req, res) => {
    console.log("api hiting")
    console.log(req.body);
})
app.listen(port, () => {
    console.log(`server log ${port}`);

})

