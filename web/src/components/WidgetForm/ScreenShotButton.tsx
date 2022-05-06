import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./Loading";



interface ScreenShotButtonProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string) => void;
}


export function ScreenShotButton({
  screenshot,
  onScreenShotTook
}: ScreenShotButtonProps){

 const[isTakingScreenshot,setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot(){
      setIsTakingScreenshot(true);

      const canvas = await html2canvas(document.querySelector('html')!);
      const base64image = canvas.toDataURL('image/png');
      console.log(base64image);

      onScreenShotTook(base64image);
      setIsTakingScreenshot(false);

  }


  if(screenshot){
    return (

      <button
       type="button" 
       className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      
      
      >
        <Trash weight="fill"/>
      </button>

    );
  }

  return(

    <button
        type="button"
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-zinc-900 hover:ring-primary-200 transition-colors"
        onClick={handleTakeScreenshot}
    >
        {isTakingScreenshot ? <Loading/> : <Camera/>} 

    </button>



  );
}