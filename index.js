require('./db/connect')
const express = require('express');
const app = express();
//to import the route
const rooms = require('./routes/rooms')
const userRoutes = require('./routes/user');
const roomTypeRoutes = require('./routes/roomType');

// inorder to send json from our application and 
// inorder to access that data in our route, we need middleware that is built-in in express and the middleware is express json 
//middleware, without this we won't have the data in req.body
app.use(express.json())


//routes
app.get('/hello', (req, res) => {
    res.send("Hotel Management App")
})

// root api is '/api/v1/rooms
app.use('/api/v1/rooms', rooms);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/roomType', roomTypeRoutes);

app.use((err, req, res, next) => {
    console.log(err.message)
    res.send('An error occured!');
})

const port = 5000;

app.listen(port, console.log(`server is listening on port ${port}...`));