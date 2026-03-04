import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from "./firebaseAdmin";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('MoodFLOW Backend API');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
