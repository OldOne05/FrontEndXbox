import React from "react";
import { useHistory } from "react-router";

export default function UsuariosCard({ usuario }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/usuarios/view/${usuario.id}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className="card__title">
                <h1>{usuario.nome}</h1>
            </div>
            <div className="card_subtitle">${usuario.sobrenome?.toFixed(2)}</div>

            <div className="card__price">${usuario.price?.toFixed(2) || 0}</div>

            <div className="card__images">
                {usuario.perfis.map((perfis, index) => (
                    <div key={`usuario_perfil${index}`} className="card__">
                        <img src={perfis.titulo} alt={product.name + "'s image"} />
                    </div>
                ))}
            </div>
        </div>
    );
}