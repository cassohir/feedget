interface PropsButton{
  text?: string;
}
interface PropsInputs{

  placeholder?: string;
}

function Button(props: PropsButton) {

  return <button>{props.text ?? 'Enviar'}</button>
}

function Inputs(props: PropsInputs) {
  return <input type="text" placeholder={props.placeholder ??'Escreva'}/>
}

function App() {

 return (


  <h1>Hello World 

    <Button/>
    <Inputs/>

    </h1>
   ) 
   
}



export default App