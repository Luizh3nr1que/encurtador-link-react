import './home.css';

import { useState } from 'react';

import { FiLink } from "react-icons/fi";
import LinkItem from '../../components/LinkItem'

import api from '../../services/api';

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [erro, setErro] = useState(false);

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setErro(false);

            setData(response.data);
            setShowModal(true);

            setLink('');

        } catch {
            setErro(true);
            setLink('');
        }
    }

    return (
        <div className='container-home'>

            <div className="logo">
                <h1>DevLinks</h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={25} color="#fff" />

                    <input type="text" placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <button onClick={handleShortLink}>Gerar Link</button>
            </div>

            {erro && (
                <span className='erroMsg'>Insira um Link Valido! </span>
            )}


            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    );
}

