
import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import express from 'express'

//Inicialização do express pra ajudar no gerenciamento das rotas
const app = express();

app.use(express.json());


//Criando contato com o serviço de smtp ( usei o mailtrap.io) integrado com nodemailer;

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5f238330767ca6",
    pass: "93aeca677fefdf"
  }
});



//Criando rota de Feedbacks

app.post('/feedbacks', async (req,res)=>{

  const {type, comment, screenshot} = req.body;


  // console.log(req.body);
  const feedback = await prisma.feedback.create({
    data:{

      type,
      comment,
      screenshot

    }
  })

  await transport.sendMail({
    from: 'Equipe Itus| Escola de Tecnologia <cassio_izidorio@itusescola.com.br>',
    to:'Cássio Henrique <cassio.hir@gmail.com>',
    subject: 'Um usuário reportou um feedback no seu site',
    html: [
      `<div style="font-family:sans-serif; font-size: 16px; color:#111></div>`,
      `<p>Tipo do feedback:${type}</p>`,
      `<p>Comentário:${comment}</p>`
      // `<p>Screenshot:${screenshot}</p>`

    ].join('\n')

  })

  return res.status(201).json({data: feedback});

})

app.listen(3333,()=>{
  
  console.log('Server started!');


});

