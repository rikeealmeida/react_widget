import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors({ origin: '*', methods: 'GET,PUT,POST,DELETE' }));
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3001, () => console.log('Rodando'));





