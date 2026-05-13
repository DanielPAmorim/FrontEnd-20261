import { createContext, useContext, useState } from "react";

// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    //chamar a API passando dados
    setUsuario({ id: 0, nome: "Daniel", email: "daniel.p.amorim@iesb.edu.br" });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, login, logout, usuario }}>
      {/* value = estado compartihado */}
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
