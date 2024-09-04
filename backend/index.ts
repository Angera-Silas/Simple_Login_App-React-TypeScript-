import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req: Request, res: Response) => {
    const { name, password } = req.body;

    // Hardcoded credentials
    const validName = 'Angera Silas';
    const validPassword = '123456';

    if (name === validName && password === validPassword) {
        return res.json({ name });
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
