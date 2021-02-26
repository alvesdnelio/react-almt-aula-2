import React, 
    { 
        useState, 
        useEffect 
    } 
from 'react';
import { 
    Link, 
    useParams 
} from 'react-router-dom';

import Carregamento from '../../components/Loading'


function Github()
{
    const {nomeUsuario} = useParams();

    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        if(nomeUsuario) {
            setIsLoading(true)

            console.log(nomeUsuario);

            const URI = `https://gorest.co.in/public-api/users/${nomeUsuario}`;

            fetch(URI)
                .then(res => res.json())
                .then( result => {
                    console.log(Object.values(result.data))
                    setItems(Object.values(result.data))
                })
                .catch(error => {
                    setError(error.message)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            setItems([]);
        }
    }, [nomeUsuario]);

    return(
        <>
            <div className="content-row">
                <h1 className="identificador-cabecalho"> 
                    GITHUB 
                    {nomeUsuario && (
                        <span className="sub-titulo"> Lista de usuário do Github | Identificador da página: {nomeUsuario} </span>
                    )}
                </h1>
            </div>

            <div className="content-row">
                <div className="menu-git-hub">
                    <ul>
                        <li>
                            <Link to="/github/6">6 Daniel</Link>
                        </li>
                        <li>
                            <Link to="/github/7">7 Nélio Souza Alves</Link>
                        </li>
                        <li>
                            <Link to="/github/8">8 Yuri Gauer Marques</Link>
                        </li>
                        <li>
                            <Link to="/github/9">9 Henrique Joanoni</Link>
                        </li>
                        <li>
                            <Link to="/github/13">13 Daniel Backes</Link>
                        </li>
                    </ul>
                </div>
                <div className="conteudo-git-hub">
                    {(isLoading) && <Carregamento/> }

                    {error && error}

                    {items && (
                        <table>
                            <tbody>
                                {items.map(
                                    (repo, i) => 
                                    <tr key={i}> 
                                        <td> 
                                            {repo}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        // <ul>
                        //     {items.map((repo, i) => <li key={i}>{repo}</li>)}
                        // </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default Github;