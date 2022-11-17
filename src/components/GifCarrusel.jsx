import React from 'react';

export const GifCarrusel = ({ url, title, index}) => {
    
  return (
    <div className={"carousel-item  " + (index === 0 ? "active" : "") }>
      <div className='carousel-img-height'>
        <img src={ url } className="d-block w-100" alt={ title }/>
        <div class="carousel-caption d-none d-md-block">
      </div>
      </div>
    </div>
  )
}
