import { SubmitFeedbacksUseCase } from "./submit-feedback-use-case";


const createFeedbackSpy = jest.fn();

const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbacksUseCase(
  {create: createFeedbackSpy},
  {sendMail: sendMailSpy}


)

describe('Envio de feedbacks',()=>{

  it('should be able to send feedbacks',async ()=>{

  
      await expect(submitFeedback.execute({
          type: 'bug',
          comment: 'teste',
          // screenshot: 'data:image/png;base64,daksjdkasdjkasjk'


       })).resolves.not.toThrow();


    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able send feedbakc withou type',async ()=>{


      await expect(submitFeedback.execute({
          type: '',
          comment: 'teste',
          // screenshot: 'data:image/png;base64,daksjdkasdjkasjk'


       })).rejects.toThrow();
  });

  it('should not be able send feedbakc withou comment',async ()=>{


    await expect(submitFeedback.execute({
        type: 'bug',
        comment: '',
        // screenshot: 'data:image/png;base64,daksjdkasdjkasjk'


     })).rejects.toThrow();
});

it('should not be able send feedback with invalid screenshot',async ()=>{


  await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'teste',
      screenshot: 'test.png'


   })).rejects.toThrow();
});

})