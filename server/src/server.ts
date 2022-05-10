
import express from 'express'
import { routes } from './routes';




//Inicialização do express pra ajudar no gerenciamento das rotas
const app = express();


app.use(express.json());


app.use(routes);



app.listen(3333,()=>{
  
  console.log('Server started!');


});


