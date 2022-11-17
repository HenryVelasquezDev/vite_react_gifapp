import React from 'react'

export const GifCard = ({ title, url}) => {
  return (
    <div className="card">
        <img src={url} className="card-img-top" alt={title}/>
        <div className="card-body">
            <p className="card-text">{ title }</p>
        </div>
    </div>
  )
}
