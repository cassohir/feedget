import { CircleNotch } from "phosphor-react";



export function Loading(){

  return (

    <div className="w-4 h-4 flex item-center justify-center overflow-hidden animate-spin">
      <CircleNotch weight="bold" className="w-4 h-4"/>
    </div>

  );

}