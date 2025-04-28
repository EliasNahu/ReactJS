import React from 'react'
import { Button } from 'react-bootstrap'

const Boton = ({label,type,onClick}) => {
    console.log(type,label,onClick);
    return (
    <div>
        <Button variant='red'> Label </Button>
    </div>
    );
};

// const BotonProps = (props) => {
//     return (
//     <div>
//         <Button variant='red'> Label </Button>
//     </div>
//     );
// };

export default Boton;