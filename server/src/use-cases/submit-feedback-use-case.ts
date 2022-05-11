import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackuseCaseRequest{

  type: string;
  comment: string;
  screenshot?: string;

}


export class SubmitFeedbacksUseCase{
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ){}

  async execute(req: SubmitFeedbackuseCaseRequest){

    const {type, comment, screenshot} = req;

    if(!type){
      throw new Error('Type is required');
    }
    if(!comment){
      throw new Error('Comment is required');
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot');
    }
    
    await this.feedbacksRepository.create({
      
      type,
      comment,
      screenshot
    })
    

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px;color: #111;">`,
        `<p>Tipo de feedback:${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,

      ].join('\n')
    })
  }
}