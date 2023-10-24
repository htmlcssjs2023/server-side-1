const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

const users = [
    {id:1, name:"Halim", email: "a@gmail.com"},
    {id:2, name:"Rahim", email: "b@gmail.com"},
    {id:3, name:"Rahim", email: "c@gmail.com"},
]



app.get('/', (req, res)=>{
    res.send(`
        <div>
            <h2>Welcome to server side</h2>
            <a href="/users">Get All Users</a>
        </div>
    `);
})

app.get('/users', (req, res)=>{
    res.status(201).send(users);
})

// To create data 
app.post('/users', (req, res)=>{
   const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})


app.listen(port, ()=>{
    console.log(`Server side running at : http://localhost:${port}`);
})