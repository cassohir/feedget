import { CloseButton } from "../../CloseButton";
import {FeedbackType, feedbackTypes } from ".."
import { ArrowLeft} from "phosphor-react";
import { ScreenShotButton } from "../ScreenShotButton";
import { FormEvent, useState } from "react";



interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,

}: FeedbackContentStepProps)

{

const [comment,setComment] = useState("");

const [screenshot,setScreenShot] = useState<string | null>(null);

const feedbackTypInfo = feedbackTypes[feedbackType];

function handleSubmitFeedback(event: FormEvent){
  event.preventDefault();
  
  console.log({
    comment,
    screenshot
  });

  onFeedbackSent();
}

  return (
    <>
  <header>

      <button 
        title="Retornar à aba de feedbacks"
        type="button" 
        className="top-5 left-5 absolute text-primary-200 hover:text-white"
        onClick={onFeedbackRestartRequested}
        >

      <ArrowLeft  weight="bold" className="w-4 h-4"/>
        
      </button>
    

      <span className="text-xl leading-6 flex items-center gap-2">
        
        <img 
              src={feedbackTypInfo.image.source} 
              alt={feedbackTypInfo.image.alt} 
              className="w-6 h-6"
        />
        {feedbackTypInfo.title}
      </span>

      <CloseButton />

  </header>
    
    <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-500 bg-transparent rounded-md focus:border-primary-200 focus:ring-primary-200 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Escreva com detalhes seu feedback..."
        onChange={event => setComment(event.target.value)}
      
      />





  <footer className="flex gap-2 mt-2">
    
    <ScreenShotButton 
      onScreenShotTook={setScreenShot}
      screenshot={screenshot}
      
      />

    <button  
     
      type="submit"
      disabled={comment.length === 0 }
      className="p-2 bg-primary-200 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-primary-300
      focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-primary-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary-200"
      >Enviar FeedBack

    </button>


  </footer>

      </form>

    </>
  );
}


