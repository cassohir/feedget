import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import bugImageUrl from '../../assets/Figmoji/bug.svg'; 
import ideaImageUrl from '../../assets/Figmoji/idea.svg'; 
import toughtImageUrl from '../../assets/Figmoji/thought.svg';
import {FeedbackTypeStep} from '../WidgetForm/Steps/FeedbackTypeStep';
// import {FeedbackSucessStep} from '../WidgetForm/Steps/FeedbackSuccessStep';
import {FeedbackContentStep} from '../WidgetForm/Steps/FeedbackContentStep';

export const feedbackTypes ={
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt:'Imagem de um inseto'
    }
  },
  SUGGESTION: {
    title: 'Sugestão',
    image: {
      source: ideaImageUrl,
      alt:'Imagem de uma lâmpada'
    }
  },
  OUTRO: {
    title: 'Outro',
    image: {
      source: toughtImageUrl,
      alt:'Imagem de uma balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm()
{
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

   function handleRestartFeedback(){
     setFeedbackType(null);
   }

  return (

    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 

    

      {!feedbackType ?(

        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ): (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        
        />
      )}



      <footer className="text-xs text-neutral-400 mt-1.5">
      Feito com ♥︎ por <i><a  href="https://www.instagram.com/cassio_izidorio" target="_blank"rel="noopener noreferer">@cassio_izidorio</a></i>
      </footer>

    </div>
  );
}