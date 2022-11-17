import React, { useState } from 'react';
import { AgregarCatogoria } from './components/AgregarCatogoria';
import { GifCategoriaLista } from './components/GifCategoriaLista';
import { NavBar } from './navbar/NavBar';

export const GifApp = () => {

    const [categorias, setCategorias] = useState([]);

    const AgregarCategoria = (nuevaCategoria) => {
        const categoria = nuevaCategoria.split(" ").map(cadena => (
            cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase() + " "
        ));
        
        if (categorias.includes(categoria.join(' ').trim())) return;

        setCategorias([categoria.join(' ').trim(), ...categorias]);
    }

    return (
        <>
            <NavBar />
            <div className='container my-4'>
                <AgregarCatogoria fncAgregarCategoria={AgregarCategoria} />

                <GifCategoriaLista categorias={categorias} />

            </div>
        </>
    )
}
