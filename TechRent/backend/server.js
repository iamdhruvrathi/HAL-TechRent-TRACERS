const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173', // or whatever your Vite frontend URL is
    credentials: true
})); 