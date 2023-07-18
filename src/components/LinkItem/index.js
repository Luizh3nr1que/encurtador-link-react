import './link-item.css'

import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem({ closeModal, content }) {

    async function copyLink() {
        const textToCopy = content.link

        navigator.clipboard.writeText(textToCopy)

            .then(() => {
                alert('URL copiada para área de transferencia');
            })
            .catch(() => {
                alert('Erro ao copir link');
            })

    }

    return (
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link encurtado</h2>
                <button onClick={closeModal}><FiX size={28} color='#000' /></button>
            </div>

            <span>{content.long_url}</span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color='#fff' />
            </button>
        </div>
    )
}