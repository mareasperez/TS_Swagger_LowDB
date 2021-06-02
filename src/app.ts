import express from 'express';
import cors from 'cors'
import morgan from "morgan";
import routes from "./routes/task.routes";
import { createConnection } from "./db";

createConnection()

const app = express();
app.set('port', process.env.PORT || 3000);


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes)


export default app
