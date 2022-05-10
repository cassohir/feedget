import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


//Criando contato com o serviço de smtp ( usei o mailtrap.io) integrado com nodemailer;

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5f238330767ca6",
    pass: "93aeca677fefdf"
  }
});




export class NodeMailerAdapter implements MailAdapter{
  
  async sendMail({subject,body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Itus| Escola de Tecnologia <cassio_izidorio@itusescola.com.br>',
      to:'Cássio Henrique <cassio.hir@gmail.com>',
      subject,
      html: body,
  
    });  
  }
}



  