import express from 'express'


const app = express();

app.use(express.json());



//Criando rota de Feedbacks

app.post('/feedbacks',(req,res)=>{

  console.log(req.body);

  return res.send('Teste do servidor');

})

app.listen(3333,()=>{
  
  console.log('Server started!');


});

