import { useState } from "react";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import ButtonSubmit from "../components/ButtonSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const [matriculaErro, setMatriculaErro] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matrícula é obrigatório");
    }
    if (!senha) {
      setSenhaErro("Senha é obrigatória");
    }
    console.log(matricula, senha);
  };

  const mudaMatricula = (e) => {
    setMatricula(e.target.value);
    setMatriculaErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };
  return (
    <form onSubmit={trataSubmit}>
      <InputMatricula
        erro={matriculaErro}
        mudaValor={mudaMatricula}
      />
      <InputSenha 
        erro={senhaErro} 
        mudaValor={mudaSenha}
      />

      <ButtonSubmit>Entrar</ButtonSubmit>
    </form>
  );
}

export default FormLogin;
