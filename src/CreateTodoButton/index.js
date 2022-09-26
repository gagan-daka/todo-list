import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {

    //sin parametros
    const onClickButtonWithOutParameter = () => {
        alert('Aqui debería abrir un modal')
    }
    //con parametros
    const onClickButtonWithParameter = (msg) => {
        alert(msg)
    }

    return(
        <button 
        className="CreateTodoButton"
        //onClick={onClickButtonWithOutParameter}
        onClick={() => onClickButtonWithParameter('Aqui debería abrir un modal')}
        >
            +
        </button>
    );

}

export { CreateTodoButton };