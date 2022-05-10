import express from 'express';
import nodemailer from 'nodemailer'
import { NodeMailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbacksUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();


//Criando rota de Feedbacks
routes.post('/feedbacks', async (req,res)=>{

  const {type, comment, screenshot} = req.body;

  // console.log(req.body);

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerAdapter = new NodeMailerAdapter();
  const submitFeedbackUseCase = new SubmitFeedbacksUseCase(
    
    prismaFeedbacksRepository,
    nodeMailerAdapter
    )

    await submitFeedbackUseCase.execute({

      type,
      comment,
      screenshot
    })
  

 
  return res.status(201)
});
