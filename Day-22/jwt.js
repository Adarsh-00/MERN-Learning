const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
    res.send("Demo JWT");
});

app.post('/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
            res.status(403);
        }
        else {
            res.json({
                message: "Post created ..."
            })
        }
    })
})

app.post('/login', (req, res)=> {
    const user = {
        id: 1,
        user: "user01",
        email: "user@mail"
    }

    jwt.sign({user: user}, 'secret', (err, token) => {
        res.send(token);
    })
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.status(403);
    }
}

app.listen(8080, ()=>{ console.log("Listing at port 8080") });

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9  [Header]
.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyIjoidXNlcjAxIiwiZW1haWwiOiJ1c2VyQG1haWwifSwiaWF0IjoxNzU2NDQ4NDU1fQ [Payload]
.sMngYUXqrpOkoUoNOv7dQu61DTlMIJKunOVH1SybFXk [Signature]
*/
