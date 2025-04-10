import React from "react";

const Boton = ({label , type, onClick ...rest }) => {
    console.log(onClick);
    return(
        <>
        <Button variant = {type} onClick={onclick} {...rest}>
            {label}
        </Button>
        </>
    )
}

export default Boton;