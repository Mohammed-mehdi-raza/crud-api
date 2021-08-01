import express from 'express';
import userRoutes from './routes/user.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('hello from homepage');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});