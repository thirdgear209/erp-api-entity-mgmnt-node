console.log(`Boilerplate!!: app`);
	
import express from 'express';
import securityMiddleware from './middleware/security.middleware';


const app = express();
const port = 3002;

app.use(express.json());
app.use(securityMiddleware);

app.get('/', (req, res) => {
  res.send(JSON.stringify({message: 'Hola (ERP Mgmnt API)...'}));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});