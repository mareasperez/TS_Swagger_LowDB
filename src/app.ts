import express from 'express';
import cors from 'cors'
import morgan from "morgan";
import routes from "./routes/task.routes";
import { createConnection } from "./db";
import swaggerUI from 'swagger-ui-express'
import SwaggerJsDoc from 'swagger-jsdoc';
import { options } from './swagger.options'
createConnection();

const app = express();
app.set('port', process.env.PORT || 3000);

const spec = SwaggerJsDoc(options)
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spec));



export default app
