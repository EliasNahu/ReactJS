// import './App.css'
import { Boton } from './componentes'
import Estudiante from './componentes/Estudiante'
import Header from './componentes/Header/Header'


function App() {
  return (
    <div>
      <Header/>
      <Boton 
        label={"Click aqui"} 
        type="danger"
        onClick={(e) => { 
          console.log(e)
        }} 
        />
      <h1>Hola Mundo...!!!</h1>
      <Estudiante/>
    </div>
  );
}

export default App

