import { useState, useEffect } from 'react'
import { Api } from '../../api/Api';

export const UsuariosList = () => {
    const [usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const res = await response.json();
            
            const results = res.results;

            setUsuarios(results)

        };

        loadData();
    }, [])
    
    return (
        <div>
            {usuarios.map((usuarios, index) => (
                <div key={"usuarios_" + index}>{usuarios.nome}</div>
            ))}
        </div>
    );    
}
