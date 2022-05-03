import {ChatTeardropDots} from 'phosphor-react';
import {Popover} from '@headlessui/react';
// import { useState } from 'react';

//Estado 

export function Widget(){
  // const [isWidgetOpen,setIsWidgetOpen] = useState(false);

  // function toggleWidgetVisibility(){
  //   setIsWidgetOpen(!isWidgetOpen);
  // }
  return (  
    <Popover className="absolute bottom-5 right-4">
      
      
      <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button className="bg-primary-200 rounded-full px-3 h-12 text-primary-100 flex items-center group">
        <ChatTeardropDots weight="bold" className="w-6 h-6"/>

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">

          Feedback

          </span>
        </span>
      </Popover.Button>
    </Popover>
  )
}