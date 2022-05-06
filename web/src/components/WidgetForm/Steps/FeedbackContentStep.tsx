import { CloseButton } from "../../CloseButton";
import {FeedbackType, feedbackTypes } from ".."
import { ArrowLeft } from "phosphor-react";


interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export function FeedbackContentStep({feedbackType}: FeedbackContentStepProps)

{

const feedbackTypInfo = feedbackTypes[feedbackType];

  return (
    <>
    <header>

    <button type="button" className="top-5 left-5 absolute text-primary-200 hover:text-primary-100">

      <ArrowLeft weight="bold" className="w-4 h-4"/>
      
    </button>



    <span className="text-xl leading-6 flex items-center gap-2">
    
    <img src={feedbackTypInfo.image.source} alt={feedbackTypInfo.image.alt} className="w-6 h-6"/>
    
    {feedbackTypInfo.title}
    </span>

  <CloseButton />

  </header>
    
    <div className="flex py-8 gap-2 w-full">

   

    </div>
    </>
  );
}


