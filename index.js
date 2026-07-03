const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

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
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})
app.listen(port, () => {
    console.log(`server log ${port}`);

})

