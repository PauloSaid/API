import express , { Request, Response } from 'express';
import UserRouter from './routes/UserRoutes';

const app = express();
const serverPort = 3000;

app.listen(serverPort, () =>
    console.log('Server running on port: ' + serverPort)
    );

app.use(UserRouter);