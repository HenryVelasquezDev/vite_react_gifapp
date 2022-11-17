import React from 'react'
import { GifCategoria } from './GifCategoria'

export const GifCategoriaLista = ({ categorias }) => {
  return (
    <>
      <div className='card-grid'>
        {
          categorias.map((categoria, i) => (
            <GifCategoria key={categoria} categoria={categoria} />
          ))

        }
      </div>
    </>
  )
}
