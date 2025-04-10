import {Boton , Header} from "./components";

function App () {
    const iniciar = () => {
        console.log("Ejecutar funcion para iniciar sesion");
    };

    const crear = () =>{
        console.log("Crear cuenta");
    };

    return (
        <>
            <Header/>
            <Boton
                label={"Iniciar session"}
                type={"success"}
                style={{width: "200px"}}
                onClick={iniciar}
            />
            <Boton label={"Crear cuenta"} type={"danger"} onclick={crear} />
            <h1>Hola buen dia!!</h1>
        </>
    )
}

export default App;