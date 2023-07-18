import './error.css'

import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='error-container'>
            <img src='./erro404.png' />

            <div className='escritaErro'>
                <h1>Página Não Existe</h1>
                <Link to='/'>
                    <button>Voltar Home</button>
                </Link>
            </div>
        </div>
    )
}