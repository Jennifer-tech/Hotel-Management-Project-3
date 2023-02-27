"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./db/connect');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//to import the route
const rooms = require('./routes/rooms');
const user_1 = __importDefault(require("./routes/user"));
const roomType_1 = __importDefault(require("./routes/roomType"));
// inorder to send json from our application and 
// inorder to access that data in our route, we need middleware that is built-in in express and the middleware is express json 
//middleware, without this we won't have the data in req.body
app.use(express_1.default.json());
//routes
app.get('/hello', (req, res) => {
    res.send("Hotel Management App");
});
// root api is '/api/v1/rooms
app.use('/api/v1/rooms', rooms);
app.use('/api/v1/user', user_1.default);
app.use('/api/v1/roomType', roomType_1.default);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send('An error occured!');
});
const port = 5000;
app.listen(port, () => console.log(`server is listening on port ${port}...`));
