import React from 'react';
import CardGrande from '../CardGrande/CardGrande';
import  './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno