const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'sabana mam', email: 'sabana@gamil.com' },
    { id: 1, name: 'sabnur mam', email: 'sabnur@gamil.com' },
    { id: 1, name: 'salman mam', email: 'salman@gamil.com' }
]

app.get("/", (req, res) => {
    res.send('user management is running');
})
app.get("/users", (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`server log ${port}`);

})

