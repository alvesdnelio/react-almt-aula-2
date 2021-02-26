import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Product()
{
    const {nomeProduto} = useParams();

    return (
        <div>
            <h1 className="identificador-cabecalho"> Produto </h1>
            <ul>
                <li>
                    <Link to='/produtos/computador'> Computador </Link>
                </li>
                <li>
                    <Link to='/produtos/mouse'> Mouse </Link>
                </li>
                <li>
                    <Link to='/produtos/celular'> Celular </Link>
                </li>
            </ul>

            {nomeProduto && (
                <p>Nome do Produto: {nomeProduto} </p> 
            )}
        </div>
    );
}

export default Product;