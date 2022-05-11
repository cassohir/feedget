
import express from 'express'
import { routes } from './routes';
import cors from 'cors'




//Inicialização do express pra ajudar no gerenciamento das rotas
const app = express();

app.use(cors({
  origin: 'http://localhost:3001'
 }
));


app.use(express.json());


app.use(routes); 



app.listen(3333,()=>{
  
  console.log('Server started!');


});


