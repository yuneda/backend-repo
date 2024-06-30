import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes';
import { authMiddleware } from '../middleware/authMiddleware';
import { ApiError } from '../entities/ApiError';

const app = express();

app.use(bodyParser.json());
app.use('/', authMiddleware, userRoutes);

app.use((err: ApiError | Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
