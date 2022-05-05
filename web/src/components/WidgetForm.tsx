import { useState } from 'react';
import { CloseButton } from './CloseButton';
import bugImageUrl from '../assets/Figmoji/bug.svg'; 
import ideaImageUrl from '../assets/Figmoji/idea.svg'; 
import toughtImageUrl from '../assets/Figmoji/thought.svg'; 


const feedbackTypes ={
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

type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm()
{
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);


  return (

    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 

      <header>
        <span className="text-xl leading-6"> Deixe seu Feedback</span>
      </header>
      <CloseButton />


     {!feedbackType ? (

            <div className="flex py-8 gap-2 w-full">

            { Object.entries(feedbackTypes).map(([key,value])=>{
              return (
                <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-primary-200 focus:border-primary-200 focus:outline-none "
                onClick={()=>setFeedbackType(key as FeedbackType)}
                type="button"
                
                >
                  <img src={value.image.source} alt={value.image.alt}></img>
                <span>{value.title}</span>
                </button>
              );
            })}

            </div>
     ): (
       <p>Botão Selecionado</p> 
     )}

      <footer className="text-xs text-neutral-400">
      Feito com ♥︎ por <i><a  href="https://www.instagram.com/cassio_izidorio" target="_blank"rel="noopener noreferer">@cassio_izidorio</a></i>
      </footer>

    </div>
  );
}