import React, { useState } from 'react'

export const AgregarCatogoria = ({ fncAgregarCategoria }) => {

    const [inputValor, setInputValor] = useState("");

    const handleOnChange = (e) => {
        setInputValor(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fncAgregarCategoria(inputValor);
        setInputValor("");
    }

    return (
        <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
            <input className="form-control me-2" 
                    value={ inputValor }
                    onChange= { handleOnChange }
                    type="text" 
                    placeholder="Buscar..." 
                    aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    )
}
