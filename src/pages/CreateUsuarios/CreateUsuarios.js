import React from "react";
import { Api } from "../../api/Api";

export default function CreateUsuarios() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const sobrenome = event.target.sobrenome.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const cpf = +event.target.cpf.value;
    const perfilTitulo = event.target.titulo.value;
    const perfilImagem = event.target.imagem.value;

    const payload = {
      nome,
      sobrenome,
      email,
      senha,
      cpf,
      perfis: [
        {
          titulo: perfilTitulo,
          imagem: perfilImagem,
        },
      ],
    };

    const response = await Api.buildApiPostRequest(
      Api.createUsuarioUrl(),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 201) {
      // Product created successfully

      const id = body.id;

      props.history.push(`/Usuarios/view/${id}`);
    } else {
      // Error
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <br />

        <input type="text" id="nome" name="nome" />
        <br />

        <label htmlFor="sobrenome">Sobrenome:</label>
        <br />

        <input type="text" id="sobrenome" name="sobrenome" />
        <br />

        <label htmlFor="email">E-Mail:</label>
        <br />

        <input type="text" id="email" name="email" />
        <br />

        <label htmlFor="senha">Senha:</label>
        <br />

        <input type="text" id="senha" name="senha" />
        <br />

        <label htmlFor="cpf">CPF:</label>
        <br />

        <input type="text" id="cpf" name="cpf" />
        <br />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
