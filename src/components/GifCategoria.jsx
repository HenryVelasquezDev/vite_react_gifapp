import React, { useEffect, useState } from 'react';
import { GifCard } from './GifCard';
import { GifCarrusel } from './GifCarrusel';
import { getGifs } from '../helpers/getGifs';

export const GifCategoria = ({ categoria }) => {

  const [imagenes, setImagenes] = useState([]);
  const [idImg, setIdImg] = useState(Math.floor(Math.random() * 1000));

  const obtenerImagenes = async (categoria) => {
    const gifs = await getGifs(categoria);
    setImagenes(gifs);
  }


  useEffect(() => {
    obtenerImagenes(categoria);
  }, [])



  return (
    <div className="card my-4 col-sm-12 col-md-4">
      <div className="card-header">
        { categoria }
      </div>
      <div className="card-img-top">
        <div id={"carouselExampleControls"+idImg} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                { imagenes.map( (imagen,i) => (
                  <GifCarrusel key={imagen.id} index={i} {...imagen} />
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleControls"+idImg} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls"+idImg} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
      </div>
    </div>
  )
}
