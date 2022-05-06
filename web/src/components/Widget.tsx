import {ChatTeardropDots} from 'phosphor-react';
import {Popover} from '@headlessui/react';
import {WidgetForm} from './WidgetForm'
// import { useState } from 'react';

//Estado 

export function Widget(){
  // const [isWidgetOpen,setIsWidgetOpen] = useState(false);

  // function toggleWidgetVisibility(){
  //   setIsWidgetOpen(!isWidgetOpen);
  // }
  return (  
    <Popover className="absolute bottom-4 right-4 md:botton-8 md:right-10 flex flex-col items-end  ">
      
      
      <Popover.Panel>

        <WidgetForm />

      </Popover.Panel>

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