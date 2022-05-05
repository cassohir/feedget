import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';


export function CloseButton(){

return (

  <Popover.Button className="top-5 right-5 absolute text-primary-200 hover:text-primary-100" title="Fechar formulario de feedback">

    <X weight="bold" className="w-4 h-4"></X>
  </Popover.Button>

);
}