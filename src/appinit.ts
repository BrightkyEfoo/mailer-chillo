import 'module-alias/register';
import jwtRouter from '@components/jwt/jwt.routes';
import { initEnv } from '@utils/initEnvIronementVariables';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
const PREFIX = 'api';
const VERSION = 'v1';
initEnv();

export const port = process.env.PORT || 9000;
const app = express();

app
  .use(
    cors({
      origin: '*',
    })
  )
  .use(morgan('dev'))
  .use(express.json());

app.use(`/${PREFIX}/${VERSION}/tokens`, jwtRouter);


export default app;
