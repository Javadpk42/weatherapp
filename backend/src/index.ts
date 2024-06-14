import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weatherRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

mongoose.connect(process.env.MONGO_URL || '')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_API, credentials: true }));
app.use('/api', weatherRoutes);
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  