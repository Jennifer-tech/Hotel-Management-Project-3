require('./db/connect')
import express, { Request, Response, NextFunction } from 'express';
const app = express();
//to import the route
const rooms = require('./routes/rooms');
import userRoutes from './routes/user';
import roomTypeRoutes from './routes/roomType';

// inorder to send json from our application and 
// inorder to access that data in our route, we need middleware that is built-in in express and the middleware is express json 
//middleware, without this we won't have the data in req.body
app.use(express.json())


//routes
app.get('/', (req: Request, res: Response) => {
    res.send("Hotel Management App")
})

// root api is '/api/v1/rooms
app.use('/api/v1/rooms', rooms);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/roomType', roomTypeRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message)
    res.send('An error occured!');
})

const port = 5000;

app.listen(port, () => console.log(`server is listening on port ${port}...`));