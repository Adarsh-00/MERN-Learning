const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
const user = [];

app.get('/', (req, res)=>{
    res.send("Hello world");
});

app.post('/user', async (req, res)=>{
    try {
        const userAlreadyExist = user.find(item => req.body.username == item.username);
        if(userAlreadyExist) {
            return res.status(409).send("Username already in use, try a different one");
        }
        else {
            const salt = await bcrypt.genSalt();
            const hashedOne = await bcrypt.hash(req.body.password, 10);
            const newUser = {username: req.body.username, password: hashedOne};
            user.push(newUser);
            console.log(user);
            return res.status(201).send("user created successfully");
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }

});

app.post('/user/login', async (req, res) => {
    try {
        const findUser = await user.find(item => item.username == req.body.username);
        if(findUser == null) {
            return res.status(400).send("Cann't find user");
        }
        if(await bcrypt.compare(req.body.password, findUser.password)) {
            console.log('login successful');
            return res.status(200).send(findUser);
        }
        else{
            return res.status(401).send("Invalid Credentials");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8080, ()=> {
    console.log("listening...");
})
